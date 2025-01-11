import React from 'react';
import styled from 'styled-components';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TermsModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <ModalBackdrop onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                    <h2>Protection de Vos Données</h2>
                </ModalHeader>
                <ModalBody>
                    <p>
                        Les informations recueillies dans le cadre de ce questionnaire seront traitées par Annecy Behavioral Science Lab.
                        La confidentialité et l’anonymat seront préservés lors du traitement.
                    </p>
                    <p>
                        Conformément au Règlement Général sur la Protection des Données du 27 avril 2016, vous disposez :
                    </p>
                    <ul>
                        <li>D'un droit d'accès</li>
                        <li>D'un droit de rectification</li>
                        <li>D'un droit d'effacement</li>
                        <li>D'un droit de limitation</li>
                        <li>D'un droit à la portabilité</li>
                        <li>D'un droit d'opposition sur les données personnelles vous concernant</li>
                    </ul>
                    <p>
                        Vous pouvez également révoquer vos consentements aux traitements à tout moment.
                    </p>
                    <p>
                        Pour exercer ces droits, vous pouvez contacter directement Annecy Behavioral Science Lab, qui s’engage à le faire dans les délais légaux et à en informer Annecy Behavioral Science Lab.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <CloseButton onClick={onClose}>Accepter</CloseButton>
                </ModalFooter>
            </ModalContent>
        </ModalBackdrop>
    );
};

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  max-width: 600px;
  border-radius: 8px;
  width: 100%;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const ModalBody = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }
`;

const ModalFooter = styled.div`
  text-align: right;
`;

const CloseButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #D5BA7F;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top:20px;
  &:hover {
    background-color: #50C5B7;
  }
`;

export default TermsModal;
