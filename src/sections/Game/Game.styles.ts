import styled, { css, keyframes } from 'styled-components'

const splashAnimation = keyframes`
  0% {
    opacity: 1;
  }
  30%, 75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const loadingAnimation = keyframes`
  0% { left: 0%; transform: translateX(-100%); }
  100% { left: 100%; transform: translateX(50%); }
`

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  gap: 5px;
`

export const SettingControls = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 5px;
  display: flex;
  gap: 10px;
  & > button {
    all: unset;
    cursor: pointer;
    opacity: .2;
    transition: opacity .2s;
    padding: 5px;
    text-shadow: 0 0 1px #00000066;
    &:hover {
      opacity: 1;
    }
  }
`

export const Splash = styled.div`
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: ${splashAnimation} .75s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background: transparent;
  font-size: 42px;
  font-weight: bold;
`

export const Screen = styled.div`
  position: relative;
  flex-grow: 1;
  background: transparent;
  border-radius: 10px;
  overflow: hidden;
  transition: height .2s ease;
  height: 500px;
  @media (max-width: 700px) {
    height: 400px;
  }
`

export const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  width: 50px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0;
  cursor: pointer;
  font-size: 16px;
  border-radius: 10px;
  color: white;
  &:hover {
    background: #ffffff22;
  }
`

export const LoadingIndicator = styled.div<{$active: boolean}>`
  position: relative;
  height: 3px;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  &:after {
    content: " ";
    position: absolute;
    width: 25%;
    height: 100%;
    animation: ${loadingAnimation} ease infinite .5s;
    opacity: 0;
    background: #9564ff;
    transition: opacity .5s;
    ${(props) => props.$active && css`
      opacity: 1;
    `}
  }
`

export const Controls = styled.div`
  width: 100%;
  background: rgb(26, 27, 40);
  padding: 20px;
  color: white;
  border-radius: 10px;

  @media (max-width: 800px) {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  @media (min-width: 800px) {
    display: flex;
    gap: 20px;
    align-items: center;
    height: 80px;
  }
`
