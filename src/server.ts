/* eslint-disable no-console */
import app from './app';
import 'dotenv/config';

const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log(`🚀 Server started on port ${port}`);
});
