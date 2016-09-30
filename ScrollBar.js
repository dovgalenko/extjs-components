/**
 * This is dirty hack, which should be corrected if there any better way to make ExtJS not to
 *  reserve space for scrollers.
 *  TODO: Should think about how to make it properly.
 */
Ext.getScrollbarSize = function() {
  return {
    height: 0,
    width: 0
  }
};

Ext.define('Acronis.common.components.plugin.ScrollBar', {
  extend: 'Ext.AbstractPlugin',
  alias: 'plugin.scrollbar',

  /**
   * Template for scrollbar elements
   * @type {String}
   */
  template: '<div id="{0}" class="{1}"></div>',

  /**
   * Initialization of the plugin
   * @param  {Object} sender Component to which this plugin is attached
   */
  init: function(sender) {

    sender.setOverflowXY('hidden', 'hidden');
  },


  /**
   * Removing event handlers
   */
  destroy: function() {
  }
});
