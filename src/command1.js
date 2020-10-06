import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {

    var sketch = require('sketch')
    var sketch = require('sketch/dom')
    var async = require('sketch/async')
    var DataSupplier = require('sketch/data-supplier')
    var UI = require('sketch/ui')
    var Settings = require('sketch/settings')
    var UI = require('sketch/ui')
    var Rectangle = require('sketch/dom').Rectangle
    var document = sketch.getSelectedDocument()

    var selectedLayers = document.selectedLayers
    var selectedCount = selectedLayers.length
    var selection = document.selectedLayers.layers
    //console.log(selectedLayers)
    //console.log(selectedCount)
    console.log(selection)

    var items = []
    let ShapePath = sketch.ShapePath

    //selection condition
    if (selectedCount === 0) {
        console.log('No layers are selected.')
        UI.message('No layers are selected.')
    } else {
        //Filter groups
        detach()
        degroup()

        
        
        console.log(selection.length)
        console.log(selection)

        makeit()

    } //end of execution
    
    
    //functions
    
    function detach() {
        for (var i = 0; i < selection.length; i++){
            if (selection[i].type == 'SymbolInstance') {
                //selection[i] = selection[i].detach({ recursively: true, })
                selection[i] = selection[i].detach()
            }
        }
    }
    
    function degroup() {
        for (var i = 0; i < selection.length; i++){
            if (selection[i].type == 'Group') 
            {
                items = selection[i].layers
            //console.log('GROUP')
                for (var c = 0; c < items.length; c++) {
                    items[c].parent = selection[i].parent
                    items[c].frame.x = items[c].frame.x + selection[i].frame.x
                    items[c].frame.y = items[c].frame.y + selection[i].frame.y
                    items[c].selected = 'true'
                    items[c].sketchObject.hasClippingMask = false
                }
                selection[i].remove()
                selection = selection.concat(items)
            }
        }
        
        for (var n = 0; n < selection.length; n++) {
            var items2 = []
            if (selection[n].type == 'Group') {
                items2.push(selection[n])
            }
        }
        if (items2.length > 0) {
            degroup()
        } else {
            selection = selection.concat(items2)     
            }
    } // end of function degroup
    
    function makeit() {
    
            for (var i = 0; i < selection.length; i++){
                if (selection[i].hidden == 'true') {
                    selection[i].remove()
                } else {
                    if (selection[i].type == 'Text') 
                    {
                        if (selection[i].frame.height < 2*(selection[i].style.fontSize)) {
                            let mySquare = new ShapePath
                            ({
                                parent: selection[i].parent, 
                                frame: { x: selection[i].frame.x, y: selection[i].frame.y + ((selection[i].frame.height - selection[i].style.fontSize)/2), width: selection[i].frame.width, height: selection[i].style.fontSize},
                                style: { fills: ['#000000'], opacity: ['0.04'], borders: []}
                            })
                            selection[i].remove()
                            } else {
                                    var lines = parseInt(selection[i].frame.height / selection[i].style.lineHeight)
                                    for (var l = 0; l < lines; l++) {
                                        let mySquare = new ShapePath
                                        ({
                                            parent: selection[i].parent, 
                                            frame: { x: selection[i].frame.x, y: selection[i].frame.y + l*(selection[i].style.lineHeight), width: selection[i].frame.width - Math.floor(Math.random() * (selection[i].frame.width / 2)), height: selection[i].style.fontSize},
                                            style: { fills: ['#000000'], opacity: ['0.04'], borders: []}
                                        })
                                    }
                                    selection[i].remove()
                            }

                    } else if (selection[i].type == 'ShapePath' || selection[i].type == 'Shape') {
                        selection[i].style.opacity = '0.04'
                        selection[i].style.fills = [{ color: '#000000'}]
                    } else {
                        if (selection[i].frame.width == selection[i].frame.height && selection[i].frame.width <= 24) {
                            let mySquare = new ShapePath
                            ({
                                shapeType: ShapePath.ShapeType.Oval,
                                parent: selection[i].parent, 
                                frame: { x: selection[i].frame.x, y: selection[i].frame.y, width: selection[i].frame.width, height: selection[i].frame.height },
                                style: { fills: ['#000000'], opacity: ['0.04']}
                            })
                        } else {
                            let mySquare = new ShapePath
                            ({
                                parent: selection[i].parent, 
                                frame: { x: selection[i].frame.x, y: selection[i].frame.y, width: selection[i].frame.width, height: selection[i].frame.height },
                                style: { fills: ['#000000'], opacity: ['0.04'], borders: []}
                            })
                        }
                        selection[i].remove()
                    }
            }
        } //end of for loop
    
    } //end of function makeit

    
}
