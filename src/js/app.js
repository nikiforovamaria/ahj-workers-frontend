import API from './API';
import Controller from './Controller';
import Layout from './Layout';
import '../../service.worker';

const app = new Controller(new Layout(), new API());
app.init();
app.renderArticle();
