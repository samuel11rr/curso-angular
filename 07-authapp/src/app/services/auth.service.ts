import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {

  opciones:Object = {
    allowedConnections: ["Username-Password-Authentication","google-oauth2","facebook","twitter"],
    rememberLastLogin: false,
    socialButtonStyle: "big",
    languageDictionary: {"title":"Auth0"},
    language: "es",
    theme: {"primaryColor":"#40DF7D"},
    additionalSignUpFields: [{
      name: "domicilio",
      placeholder: "Ingresa tu domicilio",
      // The following properties are optional
      // icon: "https://example.com/assests/address_icon.png",
      // prefill: "street 123",
      validator: function(domicilio) {
        return {
           valid: domicilio.length >= 10,
           hint: "El domicilio debe tener mas de 10 caracteres" // optional
        };
      }
    },
    {
      name: "nombre_completo",
      placeholder: "Ingresa tu nombre completo"
    }]
  };

  // Configure Auth0
  lock = new Auth0Lock('5nuZqXTH4wrrG4pWTsl6oCNmVuh1o0Ee', 'samus.auth0.com', this.opciones);

  //Perfil del usuario
  userProfile: Object;

  constructor( private router:Router ) {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);

      // Fetch profile information
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
      });

    });
  }


  public getProfile(){
    if ( this.authenticated() ) {
        return JSON.parse( localStorage.getItem('profile') );
    } else {
      return {};
    }
  }


  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    this.router.navigate(['/home']);
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }
}
