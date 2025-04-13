import Header from '../components/Header.mjs';
import { contact } from './helpers/consts.mjs';
import { qs } from './helpers/utils.mjs';

const container = qs('header');
const header = new Header({ wayfinding: contact, container });

header.init();
