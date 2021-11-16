/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { registerLanguage } from '../_.contribution';

declare var AMD: any;
declare var require: any;

registerLanguage({
	id: 'powershell',
	extensions: ['.ps1', '.psm1', '.psd1'],
	aliases: ['PowerShell', 'powershell', 'ps', 'ps1'],
	loader: () => {
		if (AMD) {
			return new Promise((resolve, reject) => {
				require(['vs/basic-languages/powershell/powershell'], resolve, reject);
			});
		} else {
			return import('./powershell');
		}
	}
});