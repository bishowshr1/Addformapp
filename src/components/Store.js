import { configure } from '@testing-library/react'
import infoReducer from './InfoSlice'

export const Store = configure({
  reducer: {
    infos: infoReducer
  }
});



export default Store
