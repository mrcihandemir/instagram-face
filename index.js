const SSD_MOBILENETV1 = 'ssd_mobilenetv1'
let selectedFaceDetector = SSD_MOBILENETV1
let minConfidence = 0.5

function getFaceDetectorOptions() {
      return new faceapi.SsdMobilenetv1Options({ minConfidence  })
}

function getCurrentFaceDetectionNet() {
  console.log("gcfdn");
  console.log(faceapi.nets.ssdMobilenetv1);
    return faceapi.nets.ssdMobilenetv1
 }

function isFaceDetectionModelLoaded() {
  return !!getCurrentFaceDetectionNet().params
}

async function changeFaceDetector(detector) {
  console.log("cfd");

  if (!isFaceDetectionModelLoaded()) {
     console.log("nifdml");
    await getCurrentFaceDetectionNet().load('/')
  }
}

async function onSelectedFaceDetectorChanged(e) {
  selectedFaceDetector = e.target.value

  await changeFaceDetector(e.target.value)
  updateResults()
}

function initFaceDetectionControls() {
  const faceDetectorSelect = $('#selectFaceDetector')
  faceDetectorSelect.val(selectedFaceDetector)
  faceDetectorSelect.on('change', onSelectedFaceDetectorChanged)
  faceDetectorSelect.material_select()

  const inputSizeSelect = $('#inputSize')
  inputSizeSelect.val(inputSize)
  inputSizeSelect.on('change', onInputSizeChanged)
  inputSizeSelect.material_select()
}
   
