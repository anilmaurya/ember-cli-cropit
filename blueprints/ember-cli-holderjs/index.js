module.exports = {
  afterInstall: function(options){
    return this.addBowerPackageToProject('cropit', '0.4.5');
  }
};
