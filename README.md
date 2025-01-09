[![DOI](https://zenodo.org/badge/729853230.svg)](https://zenodo.org/doi/10.5281/zenodo.12741712)

# ScanSim PDF: 將數位PDF轉換成模仿掃描的PDF

The purpose of this Docker app is to simulate the process of printing an electronic document and then scanning it back into a PDF. The method involves converting any document into image files, slightly rotating them, and then combining them into a PDF file. The resulting PDF cannot have its text selected and is intentionally presented with a slightly rough appearance.

這一個Docker APP的用途是將電子文件模擬成列印後再掃描成PDF的結果。做法是將任意文件轉換成圖片檔，然後稍微轉個角度，再將它組合成PDF檔案。轉換後的PDF不能選取文字，也刻意地呈現有點粗糙的感覺。

![](https://blogger.googleusercontent.com/img/a/AVvXsEiBH080x3J_zV81t3_OpkuJ3a87nds59Y3CMx3dOoB8J98HyoOKBDdDFoOWWbKeAVpJnizHdfhgmDoHqDXvJFjgtPC_8seqIjc-lMJCWvSd1bwRG4LGLNPWGYF0MlwobR4QBb14fAEWqMrkbhurT-t4jqpVaC5yltTa3TC_Pjxhm6Idfnkuh5qcrw)

# Download

- For Windows: https://pulipulichen.github.io/docker-app-ScanSim-PDF/bin/scansim-pdf.exe
- For Linux and Mac OS: https://pulipulichen.github.io/docker-app-ScanSim-PDF/bin/scansim-pdf.sh

# Online Tool

- Colab: https://colab.research.google.com/github/pulipulichen/docker-app-ScanSim-PDF/blob/main/colab/docker_app_Document_to_Image_Only_PDF.ipynb

# Key Technologies

- **Docker**: 以容器化部署，確保應用程式具備可移植性和管理便利性。
- **ImageMagick**: 圖片處理。
- **qpdf**: PDF檔案處理。

# Citation

Chen, Y.-T. (2025). *ScanSim PDF* (20250109.082926) [Computer software]. Zenodo. [https://doi.org/10.5281/ZENODO.12741712](https://doi.org/10.5281/ZENODO.12741712)