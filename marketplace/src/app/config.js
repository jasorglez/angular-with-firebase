let domain;
let domain2;

import { environment } from '../environments/environment';

export let Path;
export let Server;
export let Email;

/*=============================================
Entorno Producción
=============================================*/

if(environment.production){

	domain = ""; // YOUR DOMAIN
	domain2 = domain;

/*=============================================
Entorno Desarollo
=============================================*/

}else{

	domain = 'http://localhost:4201/';
	domain2 = 'http://localhost/sistemas-angular/marketplace/src/';
	
}

/*=============================================
Exportamos la ruta para tomar imágenes
=============================================*/
Path = {

	url: domain+'assets/'
	//Cuando necestiemos trabajar con certificado SSL (registro o ingreso con facebook)
	// url: 'https://localhost:4200/assets/'

}

/*=============================================
Exportamos el endPoint del servidor para administrar archivos
=============================================*/

Server = {

	url: domain2+'assets/img/index.php?key=[YOUR_API_KEY]',
	delete: domain2+'assets/img/delete.php?key=[YOUR_API_KEY]'
}

/*=============================================
Exportamos el endPoint del servidor para enviar correos electrónicos
=============================================*/

Email = {

	url: domain2+'assets/email/index.php?key=[YOUR_API_KEY]'

}

/*=============================================
Exportamos el endPoint de la APIREST de Firebase
=============================================*/
export let Api = {

	url: '[YOUR_ENDPOINT_FIREBASE]' // YOUR FIREBASE ENDPOINT

}

/*=============================================
Exportamos el endPoint para el registro de usuarios en Firebase Authentication
=============================================*/

export let Register = {

	url: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[YOUR_API_KEY]'
}

/*=============================================
Exportamos el endPoint para el ingreso de usuarios en Firebase Authentication
=============================================*/

export let Login = {

	url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[YOUR_API_KEY]'
}


/*=============================================
Exportamos el endPoint para enviar verificación de correo electrónico
=============================================*/

export let SendEmailVerification = {

	url: 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=[YOUR_API_KEY]'

}

/*=============================================
Exportamos el endPoint para confirmar email de verificación
=============================================*/

export let ConfirmEmailVerification = {

	url: 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=[YOUR_API_KEY]'

}


/*=============================================
Exportamos el endPoint para tomar la data del usuario en Firebase auth
=============================================*/

export let GetUserData = {

	url: 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=[YOUR_API_KEY]'

}

/*=============================================
Exportamos el endPoint para Resetear la contraseña
=============================================*/

export let SendPasswordResetEmail = {

 url: 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=[YOUR_API_KEY]'

}

/*=============================================
Exportamos el endPoint para confirmar el cambio de la contraseña
=============================================*/

export let VerifyPasswordResetCode = {

	url: 'https://identitytoolkit.googleapis.com/v1/accounts:resetPassword?key=[YOUR_API_KEY]'

}

/*=============================================
Exportamos el endPoint para enviar la contraseña
=============================================*/

export let ConfirmPasswordReset = {

	url:'https://identitytoolkit.googleapis.com/v1/accounts:resetPassword?key=[YOUR_API_KEY]'

}

/*=============================================
Exportamos el endPoint para cambiar la contraseña
=============================================*/

export let ChangePassword = {

	url:'https://identitytoolkit.googleapis.com/v1/accounts:update?key=[YOUR_API_KEY]'
}


/*=============================================
Exportamos las credenciales de PAYU
=============================================*/

export let Payu = {

	//Sandbox
	action: 'https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/',
	merchantId: '508029',
	accountId: '512321', //Solo para Colombia
	responseUrl: domain+'account/my-shopping',
	confirmationUrl: domain+'assets/payu/index.php',
	apiKey: '4Vj8eK4rloUd272L48hsrarnUA',
	test: 1

	//live
	//action: 'https://checkout.payulatam.com/ppp-web-gateway-payu/',
	//merchantId: '',
	//accountId: '',
	//responseUrl: '',
	//confirmationUrl: '',
	//apiKey:''
	//test: 0 


}

/*=============================================
Exportamos las credenciales de MERCADO PAGO
=============================================*/

export let MercadoPago = {

	//Sandbox
	public_key: "TEST-1b48633c-6600-4d9b-afb6-60652e431db9",
	access_token: "TEST-1682012079503888-061818-451240c685c601e19c6ff363205570d8-184874455"

	//Live
	// public_key: "[YOUR_PUBLIC_KEY]",
	// access_token:"[YOUR_ACCESS_TOKEN]"


}