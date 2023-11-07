import React, { createContext, useState, useEffect, FC,ReactNode } from "react";
import { countChar, countPro, countPara, countRead, countSent, longWord, countWord } from '../utils';

interface DataContextProviderProps {
    children: ReactNode
 }

interface DataState {
  text: string;
  words: number | undefined;
  characters: number | undefined;
  pro: number;
  para: number;
  sent: number;
  read: string | undefined | number;
  long: string | undefined;
}

interface DataContextProps {
  words: number | undefined;
  characters: number | undefined;
  pro: number;
  para: number;
  sent: number;
  text: string;
  state: DataState;
  setState: React.Dispatch<React.SetStateAction<DataState>>;
  read: string | undefined | number;
  long: string | undefined;
}

export const DataContext = createContext<DataContextProps>({} as DataContextProps);

export const DataProvider = ({ children} :  DataContextProviderProps) => {

  const [state, setState] = useState<DataState>({
    text: "",
    words: 0,
    characters: 0,
    pro: 0,
    para: 0,
    sent: 0,
    read: "-",
    long: "-"
  })


  useEffect(() => {

    const characterCount = countChar(state.text);
    const wordCount = countWord(state.text);
    const proCount = countPro(state.text);
    const readCount = countRead(state.text);
    const long = longWord(state.text);
    const paraCount = countPara(state.text);
    const sentCount = countSent(state.text)
    setState({ ...state, characters: characterCount, words: wordCount, pro: proCount, read: readCount, long: long, para: paraCount, sent: sentCount })

    const valueSet = () => {
      if (state.text.length === 0) {
        setState({ ...state, para: 0, sent: 0, characters: 0, read: "-", long: "-" })
      }
    }

    valueSet()

  }, [state.text])

  return (
    <DataContext.Provider value={{
      words: state.words, characters: state.characters, pro: state.pro, para: state.para, sent: state.sent,
      text: state.text, state, setState,
      read: state.read, long: state.long
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;