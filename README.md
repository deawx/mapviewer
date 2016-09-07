
<img src="./media/image01.jpg" width="32%"/>
<img src="./media/image02.png" width="32%"/> 
<img src="./media/image03.jpg" width="32%"/>

JavaScript application allowing to see KML polygons on Google Maps

# 1. Launching application

In order to launch the application you need to have QR code reader application (for example QRDroid on Android). After scanning given QR code, URL will be decoded. After visiting such URL, you will have application opened in your browser:

<img src="./media/image13.jpg" width="32%"/>

# 2. GUI

GUI consist of:
- div, which loads Google Maps with polygons and markers:

<img src="./media/image01.jpg" width="32%"/> 
  
- menu button, which opens menu:

<img src="./media/image02.png" width="32%"/> 

- plus / minus button, if your phone does not support multitouch for zooming in / out:

<img src="./media/image15.jpg" width="32%"/>

## 2.1 Menu

### 2.1.1 Map type

<img src="./media/image05.png" width="18%"/>

We can select **A** - satelite map or **B** - road map:

<img src="./media/image03.jpg" width="32%"/>
<img src="./media/image16.jpg" width="32%"/>

### 2.1.2 Map view

<img src="./media/image06.png" width="18%"/>

There are three available map views:
- **A** - territory view
- **B** - regions view
- **C** - region view

<img src="./media/image13.jpg" width="32%"/>
<img src="./media/image01.jpg" width="32%"/>
<img src="./media/image14.jpg" width="32%"/>

### 2.1.3 Information

<img src="./media/image07.png" width="18%"/>

*Information* button displays descriptions and types, distinguished by colors. The table on menu looks different for territory view:

<img src="./media/image12.png" width="32%"/>

and different for regions view:

<img src="./media/image04.png" width="32%"/>

### 2.1.4 Searching address

<img src="./media/image08.png" width="18%"/>

If we don't konw where on map there is some address we can use this function. Searched address should be written in the field visible below:

<img src="./media/image17.png" width="32%"/>

If searched address is found, menu will be closed and we will see marker together with a box as it is shown below:

<img src="./media/image18.jpg" width="32%"/>

### 2.1.5 Fetching address

<img src="./media/image09.png" width="18%"/>

This functionality may become useful if we visited some place within selected territory, but we don't remember the exact address. We enable fetching addresses pressing the grey button, shown below:

<img src="./media/image19.jpg" width="18%"/>

<img src="./media/image21.png" width="32%"/>

After pressing the button menu will be closed. Now when we touch any place on the map, we will get information about it:

<img src="./media/image23.jpg" width="32%"/>

If we want to disable fetching addresses we need to go back to the menu > fetching addresses and press the button:

<img src="./media/image20.png" width="18%"/>

<img src="./media/image22.png" width="32%"/>

### 2.1.6 Settings

<img src="./media/image10.png" width="18%"/>

<img src="./media/image24.png" width="32%"/>

There are three settings:
- show / hide address markers:

<img src="./media/image25.jpg" width="32%"/>

- show / hide regions numbers:

<img src="./media/image26.jpg" width="32%"/>

- change language: polish / english
