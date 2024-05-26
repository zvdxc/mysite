
gdjs.evtsExt__RectangularMovement__RectangularMovement = gdjs.evtsExt__RectangularMovement__RectangularMovement || {};

/**
 * Behavior generated from Rectangular Movement
 */
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement = class RectangularMovement extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.HorizontalSpeed = behaviorData.HorizontalSpeed !== undefined ? behaviorData.HorizontalSpeed : Number("300") || 0;
    this._behaviorData.VerticalSpeed = behaviorData.VerticalSpeed !== undefined ? behaviorData.VerticalSpeed : Number("300") || 0;
    this._behaviorData.HorizontalDistance = behaviorData.HorizontalDistance !== undefined ? behaviorData.HorizontalDistance : Number("100") || 0;
    this._behaviorData.VerticalDistance = behaviorData.VerticalDistance !== undefined ? behaviorData.VerticalDistance : Number("100") || 0;
    this._behaviorData.CenterPointX = behaviorData.CenterPointX !== undefined ? behaviorData.CenterPointX : Number("0") || 0;
    this._behaviorData.CenterPointY = behaviorData.CenterPointY !== undefined ? behaviorData.CenterPointY : Number("0") || 0;
    this._behaviorData.ProgressX = Number("0") || 0;
    this._behaviorData.ProgressY = Number("0") || 0;
    this._behaviorData.RectangularCounter = Number("0") || 0;
    this._behaviorData.ConstantSpeed = behaviorData.ConstantSpeed !== undefined ? behaviorData.ConstantSpeed : false;
    this._behaviorData.CounterClockwise = behaviorData.CounterClockwise !== undefined ? behaviorData.CounterClockwise : false;
    this._behaviorData.CurrentDirection = "";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.HorizontalSpeed !== newBehaviorData.HorizontalSpeed)
      this._behaviorData.HorizontalSpeed = newBehaviorData.HorizontalSpeed;
    if (oldBehaviorData.VerticalSpeed !== newBehaviorData.VerticalSpeed)
      this._behaviorData.VerticalSpeed = newBehaviorData.VerticalSpeed;
    if (oldBehaviorData.HorizontalDistance !== newBehaviorData.HorizontalDistance)
      this._behaviorData.HorizontalDistance = newBehaviorData.HorizontalDistance;
    if (oldBehaviorData.VerticalDistance !== newBehaviorData.VerticalDistance)
      this._behaviorData.VerticalDistance = newBehaviorData.VerticalDistance;
    if (oldBehaviorData.CenterPointX !== newBehaviorData.CenterPointX)
      this._behaviorData.CenterPointX = newBehaviorData.CenterPointX;
    if (oldBehaviorData.CenterPointY !== newBehaviorData.CenterPointY)
      this._behaviorData.CenterPointY = newBehaviorData.CenterPointY;
    if (oldBehaviorData.ProgressX !== newBehaviorData.ProgressX)
      this._behaviorData.ProgressX = newBehaviorData.ProgressX;
    if (oldBehaviorData.ProgressY !== newBehaviorData.ProgressY)
      this._behaviorData.ProgressY = newBehaviorData.ProgressY;
    if (oldBehaviorData.RectangularCounter !== newBehaviorData.RectangularCounter)
      this._behaviorData.RectangularCounter = newBehaviorData.RectangularCounter;
    if (oldBehaviorData.ConstantSpeed !== newBehaviorData.ConstantSpeed)
      this._behaviorData.ConstantSpeed = newBehaviorData.ConstantSpeed;
    if (oldBehaviorData.CounterClockwise !== newBehaviorData.CounterClockwise)
      this._behaviorData.CounterClockwise = newBehaviorData.CounterClockwise;
    if (oldBehaviorData.CurrentDirection !== newBehaviorData.CurrentDirection)
      this._behaviorData.CurrentDirection = newBehaviorData.CurrentDirection;

    return true;
  }

  // Properties:
  
  _getHorizontalSpeed() {
    return this._behaviorData.HorizontalSpeed !== undefined ? this._behaviorData.HorizontalSpeed : Number("300") || 0;
  }
  _setHorizontalSpeed(newValue) {
    this._behaviorData.HorizontalSpeed = newValue;
  }
  _getVerticalSpeed() {
    return this._behaviorData.VerticalSpeed !== undefined ? this._behaviorData.VerticalSpeed : Number("300") || 0;
  }
  _setVerticalSpeed(newValue) {
    this._behaviorData.VerticalSpeed = newValue;
  }
  _getHorizontalDistance() {
    return this._behaviorData.HorizontalDistance !== undefined ? this._behaviorData.HorizontalDistance : Number("100") || 0;
  }
  _setHorizontalDistance(newValue) {
    this._behaviorData.HorizontalDistance = newValue;
  }
  _getVerticalDistance() {
    return this._behaviorData.VerticalDistance !== undefined ? this._behaviorData.VerticalDistance : Number("100") || 0;
  }
  _setVerticalDistance(newValue) {
    this._behaviorData.VerticalDistance = newValue;
  }
  _getCenterPointX() {
    return this._behaviorData.CenterPointX !== undefined ? this._behaviorData.CenterPointX : Number("0") || 0;
  }
  _setCenterPointX(newValue) {
    this._behaviorData.CenterPointX = newValue;
  }
  _getCenterPointY() {
    return this._behaviorData.CenterPointY !== undefined ? this._behaviorData.CenterPointY : Number("0") || 0;
  }
  _setCenterPointY(newValue) {
    this._behaviorData.CenterPointY = newValue;
  }
  _getProgressX() {
    return this._behaviorData.ProgressX !== undefined ? this._behaviorData.ProgressX : Number("0") || 0;
  }
  _setProgressX(newValue) {
    this._behaviorData.ProgressX = newValue;
  }
  _getProgressY() {
    return this._behaviorData.ProgressY !== undefined ? this._behaviorData.ProgressY : Number("0") || 0;
  }
  _setProgressY(newValue) {
    this._behaviorData.ProgressY = newValue;
  }
  _getRectangularCounter() {
    return this._behaviorData.RectangularCounter !== undefined ? this._behaviorData.RectangularCounter : Number("0") || 0;
  }
  _setRectangularCounter(newValue) {
    this._behaviorData.RectangularCounter = newValue;
  }
  _getConstantSpeed() {
    return this._behaviorData.ConstantSpeed !== undefined ? this._behaviorData.ConstantSpeed : false;
  }
  _setConstantSpeed(newValue) {
    this._behaviorData.ConstantSpeed = newValue;
  }
  _toggleConstantSpeed() {
    this._setConstantSpeed(!this._getConstantSpeed());
  }
  _getCounterClockwise() {
    return this._behaviorData.CounterClockwise !== undefined ? this._behaviorData.CounterClockwise : false;
  }
  _setCounterClockwise(newValue) {
    this._behaviorData.CounterClockwise = newValue;
  }
  _toggleCounterClockwise() {
    this._setCounterClockwise(!this._getCounterClockwise());
  }
  _getCurrentDirection() {
    return this._behaviorData.CurrentDirection !== undefined ? this._behaviorData.CurrentDirection : "";
  }
  _setCurrentDirection(newValue) {
    this._behaviorData.CurrentDirection = newValue;
  }
}

/**
 * Shared data generated from Rectangular Movement
 */
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.SharedData = class RectangularMovementSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._RectangularMovement_RectangularMovementSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._RectangularMovement_RectangularMovementSharedData = new gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.SharedData(
      initialData
    );
  }
  return instanceContainer._RectangularMovement_RectangularMovementSharedData;
}

// Methods:
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2_1final = [];

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3_1final = [];

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4= [];
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects5= [];


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCounterClockwise()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].setY((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterPointY()) + Math.cos(gdjs.toRad((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgressY()))) * Math.abs((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalDistance())) / 2);
}
}}

}


{

/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCounterClockwise() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].setY((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterPointY()) - Math.cos(gdjs.toRad((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgressY()))) * Math.abs((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalDistance())) / 2);
}
}}

}


};gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalDistance() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].setX((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterPointX()) + Math.cos(gdjs.toRad((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgressX()))) * Math.abs((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalDistance())) / 2);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalDistance() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4);

{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgressX(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgressX() + ((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalSpeed()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) / 2));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRectangularCounter(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRectangularCounter() + ((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalSpeed()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) / 2));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalDistance() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRectangularCounter(180);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentDirection("Left");
}
}}

}


};gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4);

{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgressY(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgressY() + ((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalSpeed()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) / 2));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRectangularCounter(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRectangularCounter() + ((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalSpeed()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) / 2));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalDistance() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRectangularCounter(360);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCounterClockwise()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentDirection("Up");
}
}}

}


{

/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCounterClockwise() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentDirection("Down");
}
}}

}


};gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4);

{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgressX(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgressX() + ((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalSpeed()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) / 2));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRectangularCounter(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRectangularCounter() + ((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalSpeed()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) / 2));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalDistance() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRectangularCounter(540);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentDirection("Right");
}
}}

}


};gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4);

{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgressY(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgressY() + ((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalSpeed()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) / 2));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRectangularCounter(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRectangularCounter() + ((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalSpeed()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) / 2));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalDistance() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRectangularCounter(720);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCounterClockwise()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentDirection("Down");
}
}}

}


{

/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCounterClockwise() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentDirection("Up");
}
}}

}


};gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRectangularCounter() < 180 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRectangularCounter() >= 180 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRectangularCounter() < 360 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRectangularCounter() >= 360 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRectangularCounter() < 540 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRectangularCounter() >= 540 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRectangularCounter() < 720 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRectangularCounter() >= 720 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRectangularCounter(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRectangularCounter() - (720));
}
}}

}


};gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getConstantSpeed()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCounterClockwise()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].setX((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterPointX()) - Math.abs((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalDistance())) / 2 + (gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgressX()));
}
}}

}


{

/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCounterClockwise() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].setX((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterPointX()) + Math.abs((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalDistance())) / 2 - (gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgressX()));
}
}}

}


};gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalDistance() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].setY((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterPointY()) - Math.abs((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalDistance())) / 2 + (gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgressY()));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalDistance() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgressX(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgressX() + ((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalSpeed()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgressX() >= Math.abs((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).HorizontalDistance((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgressX(Math.abs((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalDistance())));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRectangularCounter(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRectangularCounter() + (1));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCounterClockwise() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentDirection("Left");
}
}}

}


{

/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCounterClockwise()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentDirection("Right");
}
}}

}


};gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgressY(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgressY() + ((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalSpeed()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgressY() >= Math.abs((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).VerticalDistance((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgressY(Math.abs((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalDistance())));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRectangularCounter(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRectangularCounter() + (1));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentDirection("Down");
}
}}

}


};gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgressX(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgressX() - ((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalSpeed()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4);

for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgressX() < 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3_1final.push(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4);

for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalDistance() == 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3_1final.push(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3_1final, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgressX(0);
}
}{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRectangularCounter(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRectangularCounter() + (1));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCounterClockwise() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentDirection("Right");
}
}}

}


{

/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCounterClockwise()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentDirection("Left");
}
}}

}


};gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList14 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgressY(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgressY() - ((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalSpeed()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3);

for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgressY() < 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3);

for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalDistance() == 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2_1final, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgressY(0);
}
}{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRectangularCounter(0);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentDirection("Up");
}
}}

}


};gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList15 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRectangularCounter() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList11(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRectangularCounter() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList12(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRectangularCounter() == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList13(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRectangularCounter() == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList14(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList16 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList10(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList15(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList17 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getConstantSpeed() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList16(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList18 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterPointX() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterPointY() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterPointX((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getX()));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterPointY((gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getY()));
}
}}

}


{


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList8(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList17(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList19 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList18(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.GDObjectObjects5.length = 0;

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.doStepPreEventsContext.eventsList19(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ProgressYContext = {};
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ProgressYContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ProgressYContext.GDObjectObjects2= [];


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ProgressYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ProgressYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ProgressYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ProgressYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgressY()); }}}

}


};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ProgressY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ProgressYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ProgressYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ProgressYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ProgressXContext = {};
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ProgressXContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ProgressXContext.GDObjectObjects2= [];


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ProgressXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ProgressXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ProgressXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ProgressXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgressX()); }}}

}


};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ProgressX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ProgressXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ProgressXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ProgressXContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.HorizontalSpeedContext = {};
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.HorizontalSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.HorizontalSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.HorizontalSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.HorizontalSpeedContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.HorizontalSpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.HorizontalSpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalSpeed()); }}}

}


};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.HorizontalSpeed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.HorizontalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.HorizontalSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.HorizontalSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.VerticalSpeedContext = {};
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.VerticalSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.VerticalSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.VerticalSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.VerticalSpeedContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.VerticalSpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.VerticalSpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalSpeed()); }}}

}


};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.VerticalSpeed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.VerticalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.VerticalSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.VerticalSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.HorizontalDistanceContext = {};
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.HorizontalDistanceContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.HorizontalDistanceContext.GDObjectObjects2= [];


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.HorizontalDistanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.HorizontalDistanceContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.HorizontalDistanceContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.HorizontalDistanceContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalDistance()); }}}

}


};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.HorizontalDistance = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.HorizontalDistanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.HorizontalDistanceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.HorizontalDistanceContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.VerticalDistanceContext = {};
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.VerticalDistanceContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.VerticalDistanceContext.GDObjectObjects2= [];


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.VerticalDistanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.VerticalDistanceContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.VerticalDistanceContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.VerticalDistanceContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalDistance()); }}}

}


};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.VerticalDistance = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.VerticalDistanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.VerticalDistanceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.VerticalDistanceContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.CenterXContext = {};
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.CenterXContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.CenterXContext.GDObjectObjects2= [];


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.CenterXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.CenterXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.CenterXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.CenterXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterPointX()); }}}

}


};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.CenterX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.CenterXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.CenterXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.CenterXContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.CenterYContext = {};
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.CenterYContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.CenterYContext.GDObjectObjects2= [];


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.CenterYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.CenterYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.CenterYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.CenterYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterPointY()); }}}

}


};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.CenterY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.CenterYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.CenterYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.CenterYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCenterYContext = {};
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCenterYContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCenterYContext.GDObjectObjects2= [];


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCenterYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCenterYContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCenterYContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCenterYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterPointY((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCenterY = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCenterYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCenterYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCenterYContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCenterXContext = {};
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCenterXContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCenterXContext.GDObjectObjects2= [];


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCenterXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCenterXContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCenterXContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCenterXContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterPointX((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCenterX = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCenterXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCenterXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCenterXContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetHorizontalDistanceContext = {};
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetHorizontalDistanceContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetHorizontalDistanceContext.GDObjectObjects2= [];


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetHorizontalDistanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetHorizontalDistanceContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetHorizontalDistanceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetHorizontalDistanceContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHorizontalDistance((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetHorizontalDistance = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetHorizontalDistanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetHorizontalDistanceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetHorizontalDistanceContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetVerticalDistanceContext = {};
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetVerticalDistanceContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetVerticalDistanceContext.GDObjectObjects2= [];


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetVerticalDistanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetVerticalDistanceContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetVerticalDistanceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetVerticalDistanceContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setVerticalDistance((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetVerticalDistance = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetVerticalDistanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetVerticalDistanceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetVerticalDistanceContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetHorizontalSpeedContext = {};
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetHorizontalSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetHorizontalSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetHorizontalSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetHorizontalSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetHorizontalSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetHorizontalSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHorizontalSpeed((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetHorizontalSpeed = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetHorizontalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetHorizontalSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetHorizontalSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetVerticalSpeedContext = {};
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetVerticalSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetVerticalSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetVerticalSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetVerticalSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetVerticalSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetVerticalSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setVerticalSpeed((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetVerticalSpeed = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetVerticalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetVerticalSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetVerticalSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCounterClockwiseContext = {};
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCounterClockwiseContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCounterClockwiseContext.GDObjectObjects2= [];


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCounterClockwiseContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCounterClockwiseContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCounterClockwiseContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCounterClockwiseContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCounterClockwise(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCounterClockwiseContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCounterClockwiseContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCounterClockwiseContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCounterClockwise(false);
}
}}

}


};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCounterClockwise = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCounterClockwiseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCounterClockwiseContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetCounterClockwiseContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetConstantSpeedContext = {};
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetConstantSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetConstantSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetConstantSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetConstantSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetConstantSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetConstantSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setConstantSpeed(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetConstantSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetConstantSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetConstantSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setConstantSpeed(false);
}
}}

}


};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetConstantSpeed = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetConstantSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetConstantSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.SetConstantSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ResetProgressCountersContext = {};
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ResetProgressCountersContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ResetProgressCountersContext.GDObjectObjects2= [];


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ResetProgressCountersContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ResetProgressCountersContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ResetProgressCountersContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ResetProgressCountersContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgressX(0);
}
}{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ResetProgressCountersContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ResetProgressCountersContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgressY(0);
}
}{for(var i = 0, len = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ResetProgressCountersContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ResetProgressCountersContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRectangularCounter(0);
}
}}

}


};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ResetProgressCounters = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ResetProgressCountersContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ResetProgressCountersContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.ResetProgressCountersContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingDownContext = {};
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingDownContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingDownContext.GDObjectObjects2= [];


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingDownContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingDownContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingDownContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingDownContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentDirection() == "Down" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingDownContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingDownContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingDownContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingDown = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingDownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingDownContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingDownContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingUpContext = {};
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingUpContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingUpContext.GDObjectObjects2= [];


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingUpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingUpContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingUpContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingUpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentDirection() == "Up" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingUpContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingUpContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingUpContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingUp = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingUpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingUpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingUpContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingLeftContext = {};
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingLeftContext.GDObjectObjects2= [];


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingLeftContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingLeftContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentDirection() == "Left" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingLeftContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingLeftContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingLeftContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingLeft = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingLeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingLeftContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingRightContext = {};
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingRightContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingRightContext.GDObjectObjects2= [];


gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingRightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingRightContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingRightContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingRightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentDirection() == "Right" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingRightContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingRightContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingRightContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingRight = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingRightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingRightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement.prototype.IsMovingRightContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("RectangularMovement::RectangularMovement", gdjs.evtsExt__RectangularMovement__RectangularMovement.RectangularMovement);
