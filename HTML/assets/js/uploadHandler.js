//azure blob storage setup
const account = {
    name: "ampmapdata",
    sas: "?sv=2017-11-09&ss=b&srt=sco&sp=rwdlac&se=2018-07-20T07:34:24Z&st=2018-07-11T23:34:24Z&spr=https,http&sig=LWg9zuu1qbD0emhvtcW7SFQncSuIWIYYQbKafhRE9to%3D"
};

const blobUri = 'https://' + account.name + '.blob.core.windows.net';
const blobService = AzureStorage.Blob.createBlobServiceWithSas(blobUri, account.sas);


//upload button click handler
function upload() {

    //get the input details
    var school = ((document.getElementById("school_id")).options[(document.getElementById("school_id")).selectedIndex]).value;
    var year = ((document.getElementById("year")).options[(document.getElementById("year")).selectedIndex]).value;
    var question = ((document.getElementById("question_id")).options[(document.getElementById("question_id")).selectedIndex]).value;
    //generate the container name
    containerName = question + year + school;
    console.log(containerName);


    //create the container if not exists
    blobService.createContainerIfNotExists(containerName, (error, container) => {
        if (error) {
            console.log("Error creating container");
            console.log(error);
        } else {
            console.log(container.name + " Created.");
        }
    });
}

function upload1() {
    //get the file
    const file = document.getElementById('file').files[0];

    //send the file as a blob
    blobService.createBlockBlobFromBrowserFile('a2014lincoln',
            file.name,
            file,
            (error, result) => {
        if (error) {
            // Handle blob error
        } else {
            console.log('Upload is successful');
        }
    });
}