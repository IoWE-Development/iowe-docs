---
id: flashfirmware
hide_title: true
sidebar_label: Flash Firmware
slug: /mappers/cubecell/flash-firmware
---

import useBaseUrl from "@docusaurus/useBaseUrl";

<img className="docsheader" src={useBaseUrl("img/docs/cubecell/flash-firmware-header.jpg")} />

# Flash Firmware

Sometimes support will ask you to flash your mapper firmware. Peform the steps below to flash your mapper with a new firmware.

### Install Heltec serial driver

Install Heltec serial driver so your computer can communicate with the mapper. Instructions from Heltec and installer file can be found [here](https://heltec-automation-docs.readthedocs.io/en/latest/general/establish_serial_connection.html).

### Install Visual Studio Code

Download the Visual Studio Code [here](https://code.visualstudio.com/Download). If you are using Windows, choose the System installer, not the User installer.

### Install PlatformIO IDE extension

Go to PlatformIO vscode extension web page [here](https://marketplace.visualstudio.com/items?itemName=platformio.platformio-ide) and click "Install".

<img className="docs-step" src={useBaseUrl("img/docs/cubecell/platform-io-install-vscode-webpage.png")} />

If asked if you have VSCode installed, click "Continue" (otherwise repeat previous step - Install Visual Studio Code)

<img className="docs-step" src={useBaseUrl("img/docs/cubecell/platform-io-install-vscode-required.png")} />

Click "Allow" to open and install extension in VSCode.

<img className="docs-step" src={useBaseUrl("img/docs/cubecell/platform-io-install-vscode-allowed.png")} />

PlatformIO extension is now installed.

<img className="docs-step" src={useBaseUrl("img/docs/cubecell/platform-io-install-vscode-installed.png")} />

### Flash firmware onto mapper

Open the firmware folder by going to "File > Open Folder" in menu

<img className="docs-step" src={useBaseUrl("img/docs/cubecell/vscode-open-folder.png")} />

Navigate to the folder and click "Open"

<img className="docs-step" src={useBaseUrl("img/docs/cubecell/vscode-open-folder-dialog.png")} />

Click "Yes..." if you trust us.

<img className="docs-step" src={useBaseUrl("img/docs/cubecell/vscode-open-folder-trust.png")} />

Open the main.cpp from src sub-folder and wait. Initially the #include directives at the top will have squiggly underlines as unknown, but relatively soon (within 5 min) PlatformIO will detect and install the required platform and libraries. If you don't want to wait, open PlatformIO tab and go to Platforms and install "ASR Microelectronics ASR650x".

<img className="docs-step" src={useBaseUrl("img/docs/cubecell/vscode-main-cpp.png")} />

Click on the PlatformIO icon in the left sidebar.

<img className="docs-step" src={useBaseUrl("img/docs/cubecell/vscode-open-platformio.png")} />

Click Upload to compile and upload the firmware.

<img className="docs-step" src={useBaseUrl("img/docs/cubecell/vscode-platformio-upload.png")} />

The screen will go black on the mapper and then it will reboot.
