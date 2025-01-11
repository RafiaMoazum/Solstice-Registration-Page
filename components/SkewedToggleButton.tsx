import { useState } from 'react';
import styled from 'styled-components';

interface SkewedToggleProps {
    checked: boolean;
    onChange: () => void;
    label: string;
}

const SkewedToggle: React.FC<SkewedToggleProps> = ({ checked, onChange, label }) => {
    return (
        <Wrapper>
            <ToggleWrap onClick={onChange}>
                <CheckboxMark isChecked={checked}>
                    <span className="before">Non</span>
                    <span className="after">Oui</span>
                </CheckboxMark>
                <LabelText>{label}</LabelText>
            </ToggleWrap>
        </Wrapper>
    );
};

export default SkewedToggle;

const Wrapper = styled.div`
  width: 100%;
  margin-left:-0.8rem
`;

const ToggleWrap = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
//max-width: 320px;
//margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;`;

const CheckboxMark = styled.span<{ isChecked: boolean }>`
  display: inline-block;
  position: relative;
  border-radius: 0;
  width: 50px;
  height: 30px;
  transform: skew(-10deg);
  overflow: hidden;
  background: ${(props) => (props.isChecked ? '#34bfa3' : '#D5BA74')};

  .before,
  .after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    // font-weight: bold;
    color: #fff;
    transition: left 0.3s ease;
  }

  .before {
    content: 'Non';
    background: #D5BA74 ;

  }

  .after {
    content: 'Oui';
    left: -80px;
    background: #34bfa3


}

  ${(props) =>
        props.isChecked &&
        `
      .after {
        left: 0;
      }

      .before {
        left: 80px;
      }
  `}
`;

const LabelText = styled.span`
  font-size: 14px;
  margin-left: 10px;
  color: #333;
  flex: 1;
`;
