import { ENV } from './env';

const backendServerUrl = ENV.VITE_BACKEND_URL;
const collectionName = ENV.VITE_COLLECTION_NAME;

const colors = { primary: '#ffffff', secondary: '#e69138' };
const docCutOffDistance = 1;


export function getPrimaryColor() {
	return colors.primary;
}
export function getCutOffDistance() {
	return docCutOffDistance;
}
export function getSecondaryColor() {
	return colors.secondary;
}
export function getBackendServerUrl() {
	return backendServerUrl;
}

export function getCollectionName(){
	return collectionName
}

