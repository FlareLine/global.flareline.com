import { App } from '@aws-cdk/core';
import { GlobalStack } from './stack';

const app = new App();
new GlobalStack(app, 'GlobalStack');
