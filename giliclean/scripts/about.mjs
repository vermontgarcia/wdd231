import Header from '../components/Header.mjs';
import { aboutUs } from './helpers/consts.mjs';
import { qs } from './helpers/utils.mjs';

const container = qs('header');
const header = new Header({ wayfinding: aboutUs, container });

header.init();
