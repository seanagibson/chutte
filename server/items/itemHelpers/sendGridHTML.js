module.exports = {
    sellerTemp: function(buyer, productName, quantity,seller,soldPrice) {
         return '<body bgcolor="#00AC69"><table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#00AC69"><tr><td><table width="600" border="0" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF" align="center"><tr><td><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="61" style="padding-left: 20px;"><a href= "http://www.chutte.com/" target="_blank"><img src="http://res.cloudinary.com/chutteapi/image/upload/v1454789005/PROMO-GREEN2_01_01_gx0znj.png" width="100" padding-left="10px" height="auto" border="0" alt=""/></a></td><td width="393"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td height="46" align="right" valign="middle"><table width="100%" border="0" cellspacing="0" cellpadding="0"></table></td></tr><tr><td height="30"><img src="http://res.cloudinary.com/chutteapi/image/upload/v1454789010/PROMO-GREEN2_01_04_aiybdh.jpg" width="393" height="80" border="0" alt=""/></td></tr></table></td></tr></table></td></tr><tr><td align="center">&nbsp;</td></tr><tr><td>&nbsp;</td></tr><tr><td><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="10%">&nbsp;</td><td width="80%" align="left" valign="top"><font style=" color:#010101; font-size:12px"><strong><em>Hi ' + seller + ',</em></strong></font><br /><br /><font style="font-family: Verdana, Geneva, sans-serif; color:#666766; font-size:13px; line-height:21px"> "You have sold ' + quantity + '  of  ' + productName + ' to ' + buyer + ' " for a price of ' + soldPrice + '  per unit."<br /><br />The contact the buyer to make arrangements for payment and delivery.<br /><br />Thank you for using Chutte.com<br /></font></td><td width="10%">&nbsp;</td></tr><tr><td>&nbsp;</td><td align="right" valign="top"><table width="108" border="0" cellspacing="0" cellpadding="0"></table></td><td>&nbsp;</td></tr></table></td></tr></table></td></tr></table></body>';
    },
    buyerTemp: function(buyer, productName, quantity,seller,soldPrice) {
         return '<body bgcolor="#00AC69"><table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#00AC69"><tr><td><table width="600" border="0" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF" align="center"><tr><td><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="61" style="padding-left: 20px;"><a href= "http://www.chutte.com/" target="_blank"><img src="http://res.cloudinary.com/chutteapi/image/upload/v1454789005/PROMO-GREEN2_01_01_gx0znj.png" width="100" padding-left="10px" height="auto" border="0" alt=""/></a></td><td width="393"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td height="46" align="right" valign="middle"><table width="100%" border="0" cellspacing="0" cellpadding="0"></table></td></tr><tr><td height="30"><img src="http://res.cloudinary.com/chutteapi/image/upload/v1454789010/PROMO-GREEN2_01_04_aiybdh.jpg" width="393" height="80" border="0" alt=""/></td></tr></table></td></tr></table></td></tr><tr><td align="center">&nbsp;</td></tr><tr><td>&nbsp;</td></tr><tr><td><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="10%">&nbsp;</td><td width="80%" align="left" valign="top"><font style=" color:#010101; font-size:12px"><strong><em>Hi ' + buyer + ',</em></strong></font><br /><br /><font style="font-family: Verdana, Geneva, sans-serif; color:#666766; font-size:13px; line-height:21px"> "You purchased ' + quantity + '  of  ' + productName + ' from ' + seller + ' for a price of ' + soldPrice + '  per unit."<br /><br />The contact the buyer to make arrangements for payment and delivery.<br /><br />Thank you for using Chutte.com<br /></font></td><td width="10%">&nbsp;</td></tr><tr><td>&nbsp;</td><td align="right" valign="top"><table width="108" border="0" cellspacing="0" cellpadding="0"></table></td><td>&nbsp;</td></tr></table></td></tr></table></td></tr></table></body>';
    },
    postItemTemp: function(seller, productName, quantity) {
         return '<body bgcolor="#00AC69"><table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#00AC69"><tr><td><table width="600" border="0" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF" align="center"><tr><td><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="61" style="padding-left: 20px;"><a href= "http://www.chutte.com/" target="_blank"><img src="http://res.cloudinary.com/chutteapi/image/upload/v1454789005/PROMO-GREEN2_01_01_gx0znj.png" width="100" padding-left="10px" height="auto" border="0" alt=""/></a></td><td width="393"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td height="46" align="right" valign="middle"><table width="100%" border="0" cellspacing="0" cellpadding="0"></table></td></tr><tr><td height="30"><img src="http://res.cloudinary.com/chutteapi/image/upload/v1454789010/PROMO-GREEN2_01_04_aiybdh.jpg" width="393" height="80" border="0" alt=""/></td></tr></table></td></tr></table></td></tr><tr><td align="center">&nbsp;</td></tr><tr><td>&nbsp;</td></tr><tr><td><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="10%">&nbsp;</td><td width="80%" align="left" valign="top"><font style=" color:#010101; font-size:12px"><strong><em>Hi ' + seller + ',</em></strong></font><br /><br /><font style="font-family: Verdana, Geneva, sans-serif; color:#666766; font-size:13px; line-height:21px"> "You posted ' + quantity + '  of  ' + productName + '"<br /><br />Whenever an item is purchase you will be emailed with the details<br /><br />Thank you for using Chutte.com<br /></font></td><td width="10%">&nbsp;</td></tr><tr><td>&nbsp;</td><td align="right" valign="top"><table width="108" border="0" cellspacing="0" cellpadding="0"></table></td><td>&nbsp;</td></tr></table></td></tr></table></td></tr></table></body>';
    },
    signUpTemp: function(user) {
         return '<body bgcolor="#00AC69"><table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#00AC69"><tr><td><table width="600" border="0" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF" align="center"><tr><td><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="61" style="padding-left: 20px;"><a href= "http://www.chutte.com/" target="_blank"><img src="http://res.cloudinary.com/chutteapi/image/upload/v1454789005/PROMO-GREEN2_01_01_gx0znj.png" width="100" padding-left="10px" height="auto" border="0" alt=""/></a></td><td width="393"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td height="46" align="right" valign="middle"><table width="100%" border="0" cellspacing="0" cellpadding="0"></table></td></tr><tr><td height="30"><img src="http://res.cloudinary.com/chutteapi/image/upload/v1454789010/PROMO-GREEN2_01_04_aiybdh.jpg" width="393" height="80" border="0" alt=""/></td></tr></table></td></tr></table></td></tr><tr><td align="center">&nbsp;</td></tr><tr><td>&nbsp;</td></tr><tr><td><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="10%">&nbsp;</td><td width="80%" align="left" valign="top"><font style=" color:#010101; font-size:12px"><strong><em>Hi ' + user + ',</em></strong></font><br /><br /><font style="font-family: Verdana, Geneva, sans-serif; color:#666766; font-size:13px; line-height:21px"> "Welcome to chutte. Enjoy listing and buying!"<br /><br /><br /><br />Thank you for signing up Chutte.com<br /></font></td><td width="10%">&nbsp;</td></tr><tr><td>&nbsp;</td><td align="right" valign="top"><table width="108" border="0" cellspacing="0" cellpadding="0"></table></td><td>&nbsp;</td></tr></table></td></tr></table></td></tr></table></body>';
    }


};