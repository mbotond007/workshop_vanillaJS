<!doctype html>
<div class="form_div" id="reg_form_div" >
	<div>
	<label class="label" id="regname_label" for="regname"></label>
	<input type="text" id="regname" name="regname" data-field="customer_name" data-must_fillout="true" class="input_box" placeholder="Név..." value="">
	</div>
	<div>
    <label class="label" id="regemail_label" for="regemail"></label>
	<input type="email" id="regemail" name="regemail" data-field="email" data-must_fillout="true" class="input_box" placeholder="Email..." value="">
	</div>

	<div>
	<label class="label" id="regpass_label" for="regpass"></label>
	<input type="password" id="regpass" name="regpass" data-field="password" data-must_fillout="false" class="input_box" placeholder="Jelszó...">
	</div>
	
	<div>
	<label class="label" id="regpass2_label" for="regpass2"></label>
	<input type="password" id= "regpass2" name="regpass2" data-field="regpass2" data-must_fillout="false" class="input_box" placeholder="Jelszó még egyszer..">
    </div>
	
	<div>
	<label class="label" id="regphone_label" for="regphone"></label>
	<input type="text" id="regphone" name="regphone" class="input_box" data-must_fillout="false" data-field="phone" placeholder="Mobilszám...." >
	</div>

	<button id="regsubmit" class='login_button'>Regisztráció</button>
</div>