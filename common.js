/*
async function requestExternalImage(imageUrl) {
  console.log("POSTMAN");
  console.log(JSON.stringify({ imageUrl }));
  const res = await fetch('fetch_external_image', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ imageUrl })
  })
  if (!(res.status < 400)) {
    console.error(res.status + ' : ' + await res.text())
    throw new Error('failed to fetch image from url: ' + imageUrl)
  }

  let blob
  try {
    blob = await res.blob()
    return await faceapi.bufferToImage(blob)
  } catch (e) {
    console.error('received blob:', blob)
    console.error('error:', e)
    throw new Error('failed to load image from url: ' + imageUrl)
  }
}
*/



async function requestInstagramProfilePic(accountName) {
  console.log("POSTMAN2");
  console.log(JSON.stringify({ accountName }));
  const res = await fetch('instagram', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ accountName })
  })
  //console.log(body);
  if (!(res.status < 400)) {
    console.error(res.status + ' : ' + await res.text())
    throw new Error('failed to fetch instagram profile pic from url: ' + accountName)
  } else {
    console.log(res)
  }    
  
  let blob
  try {
    blob = await res.blob()
    const img =  await faceapi.bufferToImage(blob)
    $('#gandhi').get(0).src = img.src ;
    await updateResults();
    return await faceapi.bufferToImage(blob)
  } catch (e) {
    console.error('received blob:', blob)
    console.error('error:', e)
    throw new Error('failed to load image from url: ' + imageUrl)
  }

}
