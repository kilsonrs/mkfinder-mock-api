import app from './app';
import 'dotenv/config'

const port = process.env.APP_API_PORT;

app.listen(port, () => {
  console.log('🚀 Server started on port 3334');
});
