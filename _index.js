
    const TINY_FACE_DETECTOR = 'tiny_face_detector'
let selectedFaceDetector = TINY_FACE_DETECTOR

// tiny_face_detector options
let inputSize = 128
let scoreThreshold = 0.5

function getFaceDetectorOptions() {
      return new faceapi.TinyFaceDetectorOptions({ inputSize, scoreThreshold })
}

function getCurrentFaceDetectionNet() {
  console.log("gcfdn");
  console.log(faceapi.nets.tinyFaceDetector);
    return faceapi.nets.tinyFaceDetector
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
   
