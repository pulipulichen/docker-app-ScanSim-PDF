const path = require('path')
const fs = require('fs')
const ShellExec = require('./lib/ShellExec')

const prependFilenameInFolder = require('./lib/prependFilenameInFolder')
const isColab = require('./lib/isColab')

let processSinglePDF = async function (file) {
  let filename = path.basename(file)
  // let dirname = path.dirname(file)
  let filenameNoExt = filename
  if (filenameNoExt.endsWith('.pdf')) {
    filenameNoExt = filenameNoExt.slice(0, -4)
  }

  let outputFolder = `/output/${filenameNoExt}/`
  console.log({outputFolder})
  if (fs.existsSync(outputFolder)) {
    await ShellExec(`rm -fr ${outputFolder}`)
  }
  fs.mkdirSync(outputFolder, {recursive: true})

  let result

  let cmd = `pdftoppm "${file}" "/${outputFolder}/${filenameNoExt}" -png`
  console.log(cmd)
  try {
    result = await ShellExec(cmd)
  }
  catch (e) {
    console.error(e)
  }

  // --------------------------------

  let convertCmd = `img2pdf "/${outputFolder}/${filenameNoExt}"*.png -o "/output/${filenameNoExt}-images.pdf"`
  try {
    await ShellExec(convertCmd)
  }
  catch (e) {
    console.error(e)
  }

  // --------------------------------

  prependFilenameInFolder(filenameNoExt, outputFolder)

  // if (isColab) {
  //   await ShellSpawn(`cd "${outputFolder}"; zip -r ../"${filenameNoExt}.zip" . -i *`)
  // }
}

module.exports = processSinglePDF