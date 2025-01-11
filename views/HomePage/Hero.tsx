import { useState } from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';
import SkewedToggle from '../../components/SkewedToggleButton'; 
import TermsModal from 'components/TermsModal';

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    informedAboutClinic: false,
    interestedInPresentiel: false,
    interestedInOnlineConsultation: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
    } else {
      setError('');
      // handle valid email submission
      console.log('Email submitted:', email);
    }
  };

  const handleCheckboxChange = (key: string) => {
    setCheckboxes((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <HeroWrapper>
      <Contents>
        <Heading>Bientôt un espace de soutien pour traverser les défis relationnels, émotionnels et de vie.</Heading>
        <Description>
          Inscrivez-vous avec votre email pour être le premier informé lorsque notre clinique ouvrira ses portes !
        </Description>

        {/* Email Form */}
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <ErrorText>{error}</ErrorText>}

          {/* Skewed Style Checkbox Marks */}
          <BulletPoints>
            <li className="checkbox_item">
              <SkewedToggle
                checked={checkboxes.informedAboutClinic}
                onChange={() => handleCheckboxChange('informedAboutClinic')}
                label="Je souhaite être informé(e) de l'ouverture de la clinique et des services qui seront proposés"
              />
            </li>
            <li className="checkbox_item">
              <SkewedToggle
                checked={checkboxes.interestedInPresentiel}
                onChange={() => handleCheckboxChange('interestedInPresentiel')}
                label="Je suis intéressé(e) par des consultations en présentiel à la clinique d'Annecy"
              />
            </li>
            <li className="checkbox_item">
              <SkewedToggle
                checked={checkboxes.interestedInOnlineConsultation}
                onChange={() => handleCheckboxChange('interestedInOnlineConsultation')}
                label="Je suis intéressé(e) par des consultations en ligne (téléconsultation)"
              />
            </li>
          </BulletPoints>

          {/* Regular Checkbox for Terms and Conditions */}
          <TermsCheckboxWrap>
            <Checkbox
              type="checkbox"
              checked={acceptTerms}
              onChange={() => setAcceptTerms(!acceptTerms)}
            />
            <LabelText>
              J'accepte les {' '}
              <span onClick={openModal} style={{ cursor: 'pointer', textDecoration:'underline' }}>
                conditions de traitement des données
              </span>
            </LabelText>          </TermsCheckboxWrap>

          <Button type="submit" disabled={!acceptTerms}>S'inscrire</Button>
        </Form>
      </Contents>
      {/* Modal Component */}
      <TermsModal isOpen={isModalOpen} onClose={closeModal} />
      <ImageContainer>
        <HeroIllustration />
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 3rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 2;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;
  padding-top:5rem;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.5;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  // font-weight: bold;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 100%;
`;

const Input = styled.input`
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  margin-top:0.5rem;
  width: 100%;
  max-width: 100%;
  border: 2px solid #ccc;
  border-radius: 5px;

  &:focus {
    border-color: #3E3E3E;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  background: #50c5b7;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 40%;
  max-width: 400px;
  margin-top: 2rem;

  &:hover {
    background: #47b095;
  }

  &:disabled {
    background: #d5ba74;
    cursor: not-allowed;
  }
`;

const BulletPoints = styled.ul`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 0;
  list-style-type: none;

  .checkbox_item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding-left: 1.5rem; 
  }
`;

const TermsCheckboxWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Checkbox = styled.input`
  margin-right: 1rem;
   &:checked {
    background-color: red; /* Change background when checked */
    border-color: #50c5b7; /* Ensure border color matches check color */
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 6px;
    width: 6px;
    height: 6px;
    background-color: white; /* Color of the checkmark */
    clip-path: polygon(0 0, 0% 100%, 100% 100%, 100% 0); /* Draw checkmark */
  }

  &:disabled {
    opacity: 0.5;
  }
`;


const LabelText = styled.label`
  font-size: 1.5rem;
`;

const ErrorText = styled.span`
  color: red;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;
