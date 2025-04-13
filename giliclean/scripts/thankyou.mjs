import Header from '../components/Header.mjs';
import { qs } from './helpers/utils.mjs';

const container = qs('header');
const header = new Header({ wayfinding: null, container });

header.init();
