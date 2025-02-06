import { useContext } from 'react'
import { CodeContext } from '../context/CodeContext'

export const useCodeContext = () => {
    const context = useContext(CodeContext);

  return context;
}
