---
id: ifskipjoin
hide_title: true
sidebar_label: Fix ifskipjoin
slug: /mappers/cubecell/ifskipjoin-bug
---

import useBaseUrl from "@docusaurus/useBaseUrl";

<img className="docsheader" src={useBaseUrl("img/docs/cubecell/ifskipjoin-header.png")} />

# Fix ifskipjoin bug

If your mapper skips the join process and goes straight to GPS searching screen you may be experiencing the ifskipjoin bug.

Thank you to [max_plastix](https://github.com/Max-Plastix) for diagnosing and providing the fix.

## Temporary fix

If you need to map a session and cannot perform the long term fix, Follow the steps below.

- Connect power via micro usb.
- Press the **bottom button** to reset the unit.
- When you see the Helium Logo, press and hold the **top button**. This will reset credentials and start a fresh join sequence.

## Longterm fix

Peform the steps below to flash your mapper with a new firmware.

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
