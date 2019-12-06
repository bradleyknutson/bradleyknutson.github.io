var data = {
    "access_token": "7ybkjq1rggjgwkgve7e7b47a"
};

function sendEmail(event) {
    event.preventDefault();
    $('#send-email').text('Sending...');
    $('#send-email').prop('disabled', true);

    var subject = $('#subject').val();
    var message = $('#message').val() + "\n\n\n" + $('#name').val() + "\n" + $('#email').val();
    data['subject'] = subject;
    data['text'] = message;

    $.ajax({
        type: "POST",
        url: "https://postmail.invotes.com/send",
        data: data,
        success: function (response) {
            $('#send-email').text('Sent!');
            $('#subject').val('');
            $('#message').val('');
            $('#name').val('');
            $('#email').val('');
            console.log('Email was successfully sent');
        }
    });
}

$(document).ready(function(event){
    $('#send-email').on('click', sendEmail);
})