document.getElementById('boldBtn').addEventListener('click', function() {
    document.execCommand('bold');
});

document.getElementById('italicBtn').addEventListener('click', function() {
    document.execCommand('italic');
});

document.getElementById('alignLeftBtn').addEventListener('click', function() {
    document.getElementById('textArea').style.textAlign = 'left';
});

document.getElementById('alignCenterBtn').addEventListener('click', function() {
    document.getElementById('textArea').style.textAlign = 'center';
});

document.getElementById('alignRightBtn').addEventListener('click', function() {
    document.getElementById('textArea').style.textAlign = 'right';
});

document.getElementById('uppercaseBtn').addEventListener('click', function() {
    document.getElementById('textArea').style.textTransform = 'uppercase';
});

document.getElementById('lowercaseBtn').addEventListener('click', function() {
    document.getElementById('textArea').style.textTransform = 'lowercase';
});

document.getElementById('capitalizeBtn').addEventListener('click', function() {
    document.getElementById('textArea').style.textTransform = 'capitalize';
});

document.getElementById('clearTextBtn').addEventListener('click', function() {
    document.getElementById('textArea').innerText = '';
});

document.getElementById('fontSize').addEventListener('input', function() {
    let size = document.getElementById('fontSize').value;
    document.getElementById('textArea').style.fontSize = size + 'px';
});

document.getElementById('fontFamily').addEventListener('change', function() {
    let font = document.getElementById('fontFamily').value;
    document.getElementById('textArea').style.fontFamily = font;
});

document.getElementById('textColor').addEventListener('input', function() {
    let color = document.getElementById('textColor').value;
    document.getElementById('textArea').style.color = color;
});

document.getElementById('bgColor').addEventListener('input', function() {
    let color = document.getElementById('bgColor').value;
    document.getElementById('textArea').style.backgroundColor = color;
});

