const FORM_FIELDS = [
    { id: 'name', label: 'Ad' },
    { id: 'surname', label: 'Soyad' },
    { id: 'phone', label: 'Telefon Numarası' },
    { id: 'mail', label: 'E-Posta' },
    { id: 'access', label: 'Giriş Tarihi' },
    { id: 'issue', label: 'Çıkış Tarihi' }
];

document.getElementById('submit-btn').addEventListener('click', function() {
    const formData = {};
    let isFormValid = true;

    FORM_FIELDS.forEach(field => {
        const element = document.getElementById(field.id);
        if (element) {
            const value = element.value.trim();
            if (!value) {
                isFormValid = false;
            }
            formData[field.id] = value; 
        }
    });
    const reservationTypeObj = document.querySelector('input[name="rezervation-type"]:checked');
    const reservationType = reservationTypeObj ? reservationTypeObj.value : null;
    const roomCount = document.getElementById('room-count').value;
    const adultCount = document.getElementById('adult-count').value;
    const childCount = document.getElementById('child-count').value;
    const extraInput = document.querySelector('.extra input[type="text"]');
    const extraNotes = extraInput ? extraInput.value.trim() : "";

    if (!isFormValid) {
        alert("Lütfen tüm kişisel bilgileri ve tarihleri doldurunuz.");
        return;
    }

    if (!reservationType) {
        alert("Lütfen bir rezervasyon türü seçiniz.");
        return;
    }


    const checkIn = new Date(formData.access);
    const checkOut = new Date(formData.issue);

    if (checkOut <= checkIn) {
        alert("Çıkış tarihi, giriş tarihinden sonraki bir tarih olmalıdır!");
        return;
    }

    alert(`Sayın ${formData.name} ${formData.surname}, rezervasyon talebiniz başarıyla alındı!`);
});