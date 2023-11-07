
import {JavaScriptLogo} from './JavaScriptLogo'
import './App.css';
import { Container, Stack, Typography } from '@mui/material'
import { Start } from './Start';
import { useQuestionsStore } from './store/questions';

function App() {
  
    const questions = useQuestionsStore(state => state.questions)
    console.log(questions)
    return (
    <main>
      <Container maxWidth="sm">
          <Stack direction="row" spacing={2} justifyContent="center">
          <JavaScriptLogo />
          <Typography variant="h2" component="h1" > JavaScript Quiz
          </Typography>
          </Stack>
          {questions.length === 0 && <Start />}
      </Container>
    </main>
  )
}
export default App
