function volume_sphere() {

    event.preventDefault();
    

    const radiusInput = document.getElementById('radius');
    const volumeField = document.getElementById('volume');
    
    const radius = parseFloat(radiusInput.value);
    if (isNaN(radius) || radius < 0) {
        volumeField.value = 'NaN';
    } else {
        const volume = (4/3) * Math.PI * Math.pow(radius, 3);
        volumeField.value = volume.toFixed(4);
    }
    

    return false;

  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
