import { SbookButton } from '@/components/UI/SbookButton';
import { SbookRate } from '@/components/UI/SbookRate';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { RatingModalBody, SummaryContainer, SummaryTextArea } from './styled';
import { PieceStatus } from '@/domain/entity/PieceStatus';
import { Heading } from '@/components/UI/Heading';
import { Label } from '@/components/UI/Label';
import { requestApi } from '@/data/requestApi';
import { useRouter } from 'next/router';
import { ErrorMessage } from '@/components/UI/ErrorMessage';

interface RatingModalProps {
  pieceStatus: PieceStatus;
}

export default function RatingModal({ pieceStatus }: RatingModalProps) {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(pieceStatus?.rating ?? 0);
  const [summary, setSummary] = useState(pieceStatus?.summary ?? '');
  const [message, setMessage] = useState('');

  const router = useRouter();

  const saveRating = async () => {
    if (!rating) {
      setMessage('Por favor, de uma nota de 0.5 a 5.0 estrelas para a obra.');
      return;
    }

    const statusResponse = await requestApi(`/status/${pieceStatus.id}/`, {
      method: 'PUT',
      body: { summary: summary ? summary : null, rating: rating.toFixed(1) },
    });

    if (statusResponse) {
      closeModal();

      setTimeout(() => {
        router.push('./' + pieceStatus.piece.id);
      }, 200);
    }
  };

  const closeModal = () => {
    setMessage('');
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <SbookButton onClick={handleShow}>Avaliar Obra</SbookButton>

      <Modal size="lg" show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Avaliar {pieceStatus.piece.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RatingModalBody>
            <Heading>Avalie:</Heading>
            <SbookRate allowHalf fontSize={45} onChange={(value) => setRating(value)} defaultValue={rating} />
            <SummaryContainer>
              <Label htmlFor="summary">Resenha:</Label>
              <SummaryTextArea
                id="summary"
                onChange={({ target }) => setSummary(target.value)}
                rows={8}
                value={summary}
              />
            </SummaryContainer>
            <ErrorMessage>{message}</ErrorMessage>
          </RatingModalBody>
        </Modal.Body>
        <Modal.Footer>
          <SbookButton onClick={saveRating}>Salvar alterações</SbookButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}
