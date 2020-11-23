import app from './app';
import './database';

app.listen(app.get('port'), () => {
    console.log('usa el puerto', app.get('port'));
})