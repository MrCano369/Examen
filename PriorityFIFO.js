agregar(nuevo){
	if (nuevo.p) {
		var actual = this._primero;
		while(actual.sig && actual.sig.p){
			actual = actual.sig;
		}
		if (actual == this._primero) {
			if (actual.p) {
				nuevo.sig = actual.sig;
				actual.sig = nuevo;
			}else{
				nuevo.sig = actual;
				this._primero = nuevo;
			}
		}else if(actual.sig){
			nuevo.sig = actual.sig;
			actual.sig = nuevo;
		}else{
			actual.sig = nuevo;
		}
	}else{
		var actual = this._primero;
		while(actual.sig){
			actual = actual.sig;
		}
		actual.sig = nuevo;
	}
}