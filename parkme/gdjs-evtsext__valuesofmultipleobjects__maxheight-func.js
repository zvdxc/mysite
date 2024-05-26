
if (typeof gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight !== "undefined") {
  gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight = {};
gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.forEachIndex2 = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.forEachObjects2 = [];

gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.forEachTemporary2 = null;

gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.forEachTotalCount2 = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects1= [];
gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects2= [];
gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects3= [];
gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects4= [];


gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects2, gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects3[i].getHeight() > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("MaxHeight")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects3[k] = gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects3 */
{runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("MaxHeight").setNumber((( gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects3[0].getHeight()));
}}

}


};gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects1);
{runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("MaxHeight").setNumber((( gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects1[0].getHeight()));
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects1);

for (gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.forEachIndex2 = 0;gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.forEachIndex2 < gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects1.length;++gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.forEachIndex2) {
gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects2.length = 0;


gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.forEachTemporary2 = gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects1[gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.forEachIndex2];
gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects2.push(gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("MaxHeight")); }}}

}


};

gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.func = function(runtimeScene, Object, parentEventsFunctionContext) {
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

gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects1.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects2.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects3.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects4.length = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.eventsList1(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.registeredGdjsCallbacks = [];