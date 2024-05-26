
if (typeof gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth !== "undefined") {
  gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth = {};
gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.forEachIndex2 = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.forEachObjects2 = [];

gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.forEachTemporary2 = null;

gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.forEachTotalCount2 = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects1= [];
gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects2= [];
gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects3= [];
gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects4= [];


gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects2, gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects3[i].getWidth() < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("MinWidth")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects3[k] = gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects3 */
{runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("MinWidth").setNumber((( gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects3[0].getWidth()));
}}

}


};gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects1);
{runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("MinWidth").setNumber((( gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects1[0].getWidth()));
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects1);

for (gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.forEachIndex2 = 0;gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.forEachIndex2 < gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects1.length;++gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.forEachIndex2) {
gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects2.length = 0;


gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.forEachTemporary2 = gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects1[gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.forEachIndex2];
gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects2.push(gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("MinWidth")); }}}

}


};

gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.func = function(runtimeScene, Object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects1.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects2.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects3.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.GDObjectObjects4.length = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.eventsList1(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ValuesOfMultipleObjects__MinWidth.registeredGdjsCallbacks = [];