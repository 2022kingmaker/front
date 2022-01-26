import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { flexBox } from '@styles/mixin';

const ModalBlock = styled.div`
  ${flexBox('center', 'center')};
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;

const ContentsDiv = styled.div`
  outline: none;
`;

interface ModalProps {
  children: React.ReactNode;
  isShowing: boolean;
  close?: any;
}

const Modal = ({ children, isShowing, close }: ModalProps) => {
  const $portal = document.querySelector('#modal-root') as Element;

  useEffect(() => {
    isShowing ? document.body.classList.add('modal-on') : document.body.classList.remove('modal-on');
  }, [isShowing]);

  return isShowing && $portal
    ? ReactDOM.createPortal(
        <ModalBlock className={'modal-container'} onClick={close}>
          <ContentsDiv className={'contents'}>{children}</ContentsDiv>
        </ModalBlock>,
        $portal,
      )
    : null;
};

export default Modal;
