function submitForm(event) {
    event.preventDefault();

    var formData = new FormData(form);
    var toplamFiyat = 0;

    for (var i = 0; i < 10; i++) {
        var en = parseInt(formData.get("en" + i));
        var boy = parseInt(formData.get("boy" + i));
        var renk = formData.get("renk" + i);
        var adet = parseInt(formData.get("adet" + i));
        var isDuble = formData.get("duble" + i);

        if (en && boy) {
            var tül = (((en / 2) + 5) * 3.2 * boy * 0.135) / 100;
            var profil_boy = ((en + boy) * 2 + boy - 5);
            var kar = 0;
            var fiyat = 0;

            var beyaz = 0.35;
            var renkli = 0.35;
            var aksesuar_fiyat = 15;
            var miknatis_fiyat = 0.15;

            if (boy < 160) {
                kar = 100;
                if (renk === "r") {
                    fiyat = adet * (renkli * profil_boy + aksesuar_fiyat + tül + kar + 25);
                } else {
                    fiyat = adet * (beyaz * profil_boy + aksesuar_fiyat + tül + kar);
                }
            } else if (boy >= 160 && boy < 240) {
                kar = 125;
                if (renk === "r") {
                    fiyat = adet * (renkli * profil_boy + aksesuar_fiyat + tül + kar + 25);
                } else {
                    fiyat = adet * (beyaz * profil_boy + aksesuar_fiyat + tül + kar);
                }
            } else if (boy >= 240 && boy < 300) {
                kar = 150;
                if (renk === "r") {
                    fiyat = adet * (renkli * profil_boy + aksesuar_fiyat + tül + kar + 25);
                } else {
                    fiyat = adet * (beyaz * profil_boy + aksesuar_fiyat + tül + kar);
                }
            } else if (boy >= 300 && boy < 400) {
                kar = 400;
                if (renk === "r") {
                    fiyat = adet * (renkli * profil_boy + aksesuar_fiyat + tül + kar + 25);
                } else {
                    fiyat = adet * (beyaz * profil_boy + aksesuar_fiyat + tül + kar);
                }
            }

            if (isDuble) {
                var miknatis = boy * miknatis_fiyat;
                if (renk === "r") {
                    fiyat += adet*(2 * miknatis + boy * renkli + aksesuar_fiyat + kar);
                } else {
                    fiyat += adet*(2 * miknatis + boy * beyaz + aksesuar_fiyat + kar);
                }
            }

            if (boy >= 400) {
                document.querySelector("#fiyat" + i).textContent = "Lütfen arayarak bilgi alınız";
            } else {
                document.querySelector("#fiyat" + i).textContent = fiyat.toFixed(2) !== "" ? `${fiyat.toFixed(2)} ₺` : "";
                toplamFiyat += fiyat;
            }
        }
    }

    document.querySelector("#toplam_fiyat").textContent = toplamFiyat.toFixed(2) !== "" ? `${toplamFiyat.toFixed(2)} ₺` : "";
}

function resetForm() {
    document.querySelector("form").reset();
    document.querySelector("#toplam_fiyat").textContent = "";
    for (var i = 0; i < 10; i++) {
        document.querySelector("#fiyat" + i).textContent = "";
    }
}

var form = document.querySelector("form");
form.addEventListener("submit", submitForm);


