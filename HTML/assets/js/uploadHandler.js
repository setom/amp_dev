//azure blob storage setup
const account = {
    name: "ampmapdata",
    sas: "?sv=2017-11-09&ss=b&srt=sco&sp=rwlac&se=2019-07-20T00:44:15Z&st=2018-07-25T16:44:15Z&spr=https,http&sig=F4CMZiph52VBmP6f9XHsSbDN3uAkciMkdZkmLTF64IY%3D"
};

const blobUri = 'https://' + account.name + '.blob.core.windows.net';
const blobService = AzureStorage.Blob.createBlobServiceWithSas(blobUri, account.sas);


function upload() {
    //this method of upload does't care about any details, it just uploads a file to a pending container in blob
    newDataContainer = "newdatatoprocess";
    console.log(newDataContainer);
    
    //create the container if not exists
    blobService.createContainerIfNotExists(newDataContainer, (error, container) => {
        if (error) {
            console.log("Error creating container");
            console.log(error);
        } else {
            console.log(container.name + " Created.");
            const files = document.getElementById('file');
            console.log(files.files.length);
            
            //for each file that was queued, upload them
            for (i = 0; i < files.files.length; i++) {
                //send the file as a blob
                blobService.createBlockBlobFromBrowserFile(newDataContainer,
                        files.files[i].name,
                        files.files[i],
                        (error, result) => {
                    if (error) {
                        // Handle blob error
                    } else {
                        console.log('Upload to New Data is successful');
                    }
                });
            }

        }

    });
    
    rawDataContainer = "rawdata";
    console.log(rawDataContainer);
    
    //create the container if not exists
    blobService.createContainerIfNotExists(rawDataContainer, (error, container) => {
        if (error) {
            console.log("Error creating container");
            console.log(error);
        } else {
            console.log(container.name + " Created.");
            const files = document.getElementById('file');
            console.log(files.files.length);
            
            //for each file that was queued, upload them
            for (i = 0; i < files.files.length; i++) {
                //send the file as a blob
                blobService.createBlockBlobFromBrowserFile(rawDataContainer,
                        files.files[i].name,
                        files.files[i],
                        (error, result) => {
                    if (error) {
                        // Handle blob error
                    } else {
                        console.log('Upload to RAW Data is successful');
                    }
                });
            }

        }

    });
}