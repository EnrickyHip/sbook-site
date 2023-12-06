import { SbookButton } from '@/components/UI/SbookButton';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {
  HasSpoilerCheckBox,
  PieceAnnotationModalBody,
  ReadingAnnotationForm,
  SummaryContainer,
  SummaryTextArea,
} from './styled';
import { Heading } from '@/components/UI/Heading';
import { Label } from '@/components/UI/Label';
import { ErrorMessage } from '@/components/UI/ErrorMessage';
import { Input } from '@/components/UI/Input';
import { requestApi } from '@/data/requestApi';
import { useSession } from '@/Context/Session';
import { GetAllAnnotationsResponse } from '@/domain/responses/PieceAnnotationResponses';
import { PieceAnnotation } from '@/domain/entity/PieceAnnotation';
import PieceAnnotationCard from '@/components/PieceAnnotationCard';
import { PieceStatus } from '@/domain/entity/PieceStatus';
import { useRouter } from 'next/router';

interface PieceAnnotationModalProps {
  pieceStatus: PieceStatus;
}

export default function PieceAnnotationModal({ pieceStatus }: PieceAnnotationModalProps) {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  const [summary, setSummary] = useState('');
  const [page, setPage] = useState('');
  const [annotations, setAnnotations] = useState<PieceAnnotation[]>([]);

  const router = useRouter();
  const { user } = useSession();
  const { piece } = pieceStatus;

  if (!user) {
    setShow(false);
    return <></>;
  }

  const finishPiece = async () => {
    const statusResponse = await requestApi(`/status/${pieceStatus.id}/`, {
      method: 'PUT',
      body: { status: 'finished' },
    });

    if (statusResponse) {
      router.push('./' + piece.id);
    }
  };

  const saveAnnotation = async () => {
    if (!page.trim()) {
      setMessage('Digite uma página para a sua anotação.');
      return;
    }

    const pageNumber = Number(page);

    const statusResponse = await requestApi('/annotation/', {
      method: 'POST',
      body: {
        summary,
        page_number: page,
        piece: piece.id,
        user: user.id,
      },
    });

    if (statusResponse) {
      loadAnnotations();
      setPage('');
      setSummary('');
    }

    if (pageNumber === piece.pages) {
      finishPiece();
    }
  };

  const loadAnnotations = async () => {
    const url = `/annotation/user/piece/${user.id}/${piece.id}/`;
    const response = await requestApi<GetAllAnnotationsResponse>(url, { method: 'GET' });

    if (!response?.annotations) {
      setMessage('Não foi possível carregar as anotações desta obra');
      return;
    }

    setAnnotations(response.annotations);
  };

  const handlePageNumber = (value: string) => {
    if (!piece.pages || piece.pages === 0) {
      setMessage('Não é possível realizar o registro de leitura por esta obra não possui nenhum página.');
      return;
    }

    let valueNumber = Number(value);

    if (valueNumber > piece.pages) {
      valueNumber = piece.pages;
    }

    setPage(valueNumber.toString());
  };

  const closeModal = () => {
    setMessage('');
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <SbookButton onClick={handleShow}>Histórico de Leitura</SbookButton>

      <Modal onShow={loadAnnotations} show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Histórico de Leitura de {piece.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PieceAnnotationModalBody>
            <Heading size={18}>Histórico de Leitura:</Heading>

            <ReadingAnnotationForm>
              <SummaryContainer>
                <Label htmlFor="summary">Anotação:</Label>
                <SummaryTextArea
                  disabled={pieceStatus.status === 'finished'}
                  id="summary"
                  onChange={({ target }) => setSummary(target.value)}
                  rows={3}
                  value={summary}
                />
              </SummaryContainer>

              <Label htmlFor="page_read">Páginas Lidas:</Label>
              <Input
                disabled={pieceStatus.status === 'finished'}
                onChange={({ target }) => handlePageNumber(target.value)}
                value={page}
                id="page_read"
                type="number"
                min="0"
                max={piece.pages ?? 0}
              />

              {/* <HasSpoilerCheckBox>
                <Input
                  onChange={({ target }) => handlePageNumber(target.value)}
                  value={page}
                  id="has_spoiler"
                  type="checkbox"
                />
                <Label htmlFor="has_spoiler">Tem Spoiler?</Label>
              </HasSpoilerCheckBox> */}
            </ReadingAnnotationForm>

            <ErrorMessage>{message}</ErrorMessage>

            {annotations.map((annotation) => (
              <PieceAnnotationCard key={annotation.id} pieceAnnotation={annotation} />
            ))}
          </PieceAnnotationModalBody>
        </Modal.Body>
        <Modal.Footer>
          <SbookButton disabled={pieceStatus.status === 'finished'} onClick={saveAnnotation}>
            Salvar Histórico
          </SbookButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}
