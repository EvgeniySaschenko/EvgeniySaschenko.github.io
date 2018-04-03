<?
	$listProduct= '';
	for($i= 0; !empty($_POST['size'][$i]); $i++){
		$listProduct.= '<tr style="font-family: Arial, Helvetica, sans-serif;">
			<td class="cell-product" style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; border: 1px solid #c09329; text-align: center;" align="center">'.$_POST['size'][$i].'</td>
			<td class="cell-product" style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; border: 1px solid #c09329; text-align: center;" align="center">'.$_POST['color'][$i].'</td>
			<td class="cell-product" style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; border: 1px solid #c09329; text-align: center;" align="center">'.$_POST['shape'][$i].'</td>
			<td class="cell-product" style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; border: 1px solid #c09329; text-align: center;" align="center">'.$_POST['price'][$i].'</td>
			<td class="cell-product" style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; border: 1px solid #c09329; text-align: center;" align="center">'.$_POST['square'][$i].'</td>
			<td class="cell-product" style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; border: 1px solid #c09329; text-align: center;" align="center">'.$_POST['count'][$i].'</td>
			<td class="cell-product" style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; border: 1px solid #c09329; text-align: center;" align="center">'.$_POST['sum'][$i].'</td>
		</tr>';
	}

$message= 
		'<!doctype html>
		<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="font-family: Arial, Helvetica, sans-serif;">
		<head>
			<title></title>
			<!--[if !mso]><!-- -->
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<!--<![endif]-->
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<style type="text/css">
			#outlook a { padding: 0; }
			.ReadMsgBody { width: 100%; }
			.ExternalClass { width: 100%; }
			.ExternalClass * { line-height:100%; }
			body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
			table, td { border-collapse:collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
			img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
			p { display: block; margin: 13px 0; }
		</style>
		<!--[if !mso]><!-->
		<style type="text/css">
			@media only screen and (max-width:480px) {
				@-ms-viewport { width:320px; }
				@viewport { width:320px; }
			}
		</style>
		<!--<![endif]-->
		<!--[if mso]>
		<xml>
			<o:OfficeDocumentSettings>
				<o:AllowPNG/>
				<o:PixelsPerInch>96</o:PixelsPerInch>
			</o:OfficeDocumentSettings>
		</xml>
		<![endif]-->
		<!--[if lte mso 11]>
		<style type="text/css">
			.outlook-group-fix {
				width:100% !important;
			}
		</style>
		<![endif]-->

		<!--[if !mso]><!-->
				<link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
				<style type="text/css">

						@import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);

				</style>
			<!--<![endif]--><style type="text/css">
			@media only screen and (min-width:480px) {
				.mj-column-per-33 { width:33.333333333333336%!important; }
		.mj-column-per-100 { width:100%!important; }
			}
		</style>
		</head>
		<body style="font-family: Arial, Helvetica, sans-serif; background: #eee;">
			
			<div class="mj-container" style="font-family: Arial, Helvetica, sans-serif; background-color: #eee;"><!--[if mso | IE]>
					<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">
						<tr>
							<td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
					<![endif]--><div style="font-family: Arial, Helvetica, sans-serif; margin: 0px auto; max-width: 600px; background: #fff;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-family: Arial, Helvetica, sans-serif; font-size: 0px; width: 100%; background: #fff;" align="center" border="0" width="100%"><tbody style="font-family: Arial, Helvetica, sans-serif;"><tr style="font-family: Arial, Helvetica, sans-serif;"><td style="font-family: Arial, Helvetica, sans-serif; text-align: center; vertical-align: top; direction: ltr; font-size: 0px; padding: 20px 0px; padding-bottom: 0px;" align="center" valign="top"><!--[if mso | IE]>
					<table role="presentation" border="0" cellpadding="0" cellspacing="0">
						<tr>
							<td style="vertical-align:top;width:200px;">
					<![endif]--><div class="mj-column-per-33 outlook-group-fix" style="font-family: Arial, Helvetica, sans-serif; vertical-align: top; display: inline-block; direction: ltr; font-size: 13px; text-align: left; width: 100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="font-family: Arial, Helvetica, sans-serif;"><tbody style="font-family: Arial, Helvetica, sans-serif;"><tr style="font-family: Arial, Helvetica, sans-serif;"><td style="font-family: Arial, Helvetica, sans-serif; word-wrap: break-word; font-size: 0px; padding: 10px 25px;" align="left"><table cellpadding="0" cellspacing="0" style="cellspacing: 0px; color: #000; font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 13px; line-height: 22px; table-layout: auto;" width="100%" border="0"><tr style="font-family: Arial, Helvetica, sans-serif;">
										<td class="cell-header-tittle" style="font-family: Arial, Helvetica, sans-serif; font-size: 10px; font-weight: bold; padding-right: 5px;">Тел:</td>
										<td style="font-family: Arial, Helvetica, sans-serif;">+38 (099) 197-97-95</td>
									</tr>
									<tr style="font-family: Arial, Helvetica, sans-serif;">
										<td class="cell-header-tittle" style="font-family: Arial, Helvetica, sans-serif; font-size: 10px; font-weight: bold; padding-right: 5px;">Mail:</td>
										<td style="font-family: Arial, Helvetica, sans-serif;">info@podlogkafood.com</td>
									</tr>
									<tr style="font-family: Arial, Helvetica, sans-serif;">
										<td class="cell-header-tittle" style="font-family: Arial, Helvetica, sans-serif; font-size: 10px; font-weight: bold; padding-right: 5px;">Дата:</td>
										<td style="font-family: Arial, Helvetica, sans-serif;">'.date('d.m.Y').'</td>
									</tr></table></td></tr></tbody></table></div><!--[if mso | IE]>
					</td><td style="vertical-align:top;width:200px;">
					<![endif]--><div class="mj-column-per-33 outlook-group-fix" style="font-family: Arial, Helvetica, sans-serif; vertical-align: top; display: inline-block; direction: ltr; font-size: 13px; text-align: left; width: 100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="font-family: Arial, Helvetica, sans-serif;"><tbody style="font-family: Arial, Helvetica, sans-serif;"><tr style="font-family: Arial, Helvetica, sans-serif;"><td style="font-family: Arial, Helvetica, sans-serif; word-wrap: break-word; font-size: 0px; padding: 10px 25px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="font-family: Arial, Helvetica, sans-serif; border-collapse: collapse; border-spacing: 0px;" align="center" border="0"><tbody style="font-family: Arial, Helvetica, sans-serif;"><tr style="font-family: Arial, Helvetica, sans-serif;"><td style="font-family: Arial, Helvetica, sans-serif; width: 100px;" width="100"><img alt="" title="" height="auto" src="http://podlogkafood.ua-ix.biz/img/logo.png" style="font-family: Arial, Helvetica, sans-serif; border: none; border-radius: 0px; display: block; font-size: 13px; outline: none; text-decoration: none; width: 100%; height: auto;" width="100"></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]>
					</td><td style="vertical-align:top;width:200px;">
					<![endif]--><div class="mj-column-per-33 outlook-group-fix" style="font-family: Arial, Helvetica, sans-serif; vertical-align: top; display: inline-block; direction: ltr; font-size: 13px; text-align: left; width: 100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="font-family: Arial, Helvetica, sans-serif;"><tbody style="font-family: Arial, Helvetica, sans-serif;"></tbody></table></div><!--[if mso | IE]>
					</td></tr></table>
					<![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>
					</td></tr></table>
					<![endif]-->
					<!--[if mso | IE]>
					<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">
						<tr>
							<td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
					<![endif]--><div style="font-family: Arial, Helvetica, sans-serif; margin: 0px auto; max-width: 600px; background: #fff;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-family: Arial, Helvetica, sans-serif; font-size: 0px; width: 100%; background: #fff;" align="center" border="0" width="100%"><tbody style="font-family: Arial, Helvetica, sans-serif;"><tr style="font-family: Arial, Helvetica, sans-serif;"><td style="font-family: Arial, Helvetica, sans-serif; text-align: center; vertical-align: top; direction: ltr; font-size: 0px; padding: 20px 0px;" align="center" valign="top"><!--[if mso | IE]>
					<table role="presentation" border="0" cellpadding="0" cellspacing="0">
						<tr>
							<td style="vertical-align:top;width:600px;">
					<![endif]--><div class="mj-column-per-100 outlook-group-fix" style="font-family: Arial, Helvetica, sans-serif; vertical-align: top; display: inline-block; direction: ltr; font-size: 13px; text-align: left; width: 100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="font-family: Arial, Helvetica, sans-serif;"><tbody style="font-family: Arial, Helvetica, sans-serif;"><tr style="font-family: Arial, Helvetica, sans-serif;"><td style="font-family: Arial, Helvetica, sans-serif; word-wrap: break-word; font-size: 0px; padding: 10px 25px;" align="center"><div style="cursor: auto; color: #099; font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 30px; line-height: 22px; text-align: center;"><p class="text-accompanying" style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; text-align: left; color: #000;">
									Здравствуйте, <br style="font-family: Arial, Helvetica, sans-serif;"> Ваш заказ отправлен в компанию Podlogkafood, наш менеджер скоро c Вами всяжеться.
										
										
									</p></div></td></tr><tr style="font-family: Arial, Helvetica, sans-serif;"><td style="font-family: Arial, Helvetica, sans-serif; word-wrap: break-word; font-size: 0px; padding: 10px 25px;" align="left"><table cellpadding="0" cellspacing="0" style="cellspacing: 0px; color: #000; font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 13px; line-height: 22px; table-layout: auto;" width="100%" border="0"><tr style="font-family: Arial, Helvetica, sans-serif;">
										<td class="cell-buy-tittle" style="font-family: Arial, Helvetica, sans-serif; font-weight: bold; width: 120px;" width="120">Тел:</td>
										<td style="font-family: Arial, Helvetica, sans-serif;">'.$_POST['phone'].'</td>
									</tr>
									<tr style="font-family: Arial, Helvetica, sans-serif;">
										<td class="cell-buy-tittle" style="font-family: Arial, Helvetica, sans-serif; font-weight: bold; width: 120px;" width="120">Mail:</td>
										<td style="font-family: Arial, Helvetica, sans-serif;">'.$_POST['mail'].'</td>
									</tr>
									<tr style="font-family: Arial, Helvetica, sans-serif;">
										<td class="cell-buy-tittle" style="font-family: Arial, Helvetica, sans-serif; font-weight: bold; width: 120px;" width="120">Имя:</td>
										<td style="font-family: Arial, Helvetica, sans-serif;">'.$_POST['name'].'</td>
									</tr>
									<tr style="font-family: Arial, Helvetica, sans-serif;">
										<td class="cell-buy-tittle" style="font-family: Arial, Helvetica, sans-serif; font-weight: bold; width: 120px;" width="120">Комментарий:</td>
										<td style="font-family: Arial, Helvetica, sans-serif;">'.$_POST['comment'].'</td>
									</tr></table></td></tr><tr style="font-family: Arial, Helvetica, sans-serif;"><td style="font-family: Arial, Helvetica, sans-serif; word-wrap: break-word; font-size: 0px; padding: 10px 25px;" align="left"><table cellpadding="0" cellspacing="0" style="cellspacing: 0px; color: #000; font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 13px; line-height: 22px; table-layout: auto;" width="100%" border="0"><tr style="font-family: Arial, Helvetica, sans-serif;">
									<th class="cell-product title" style="font-family: Arial, Helvetica, sans-serif; vertical-align: top; padding: 0 2px; font-weight: bold; font-size: 12px; border: 1px solid #c09329; text-align: center;" valign="top" align="center">Габариты / диаметр мм</th>
									<th class="cell-product cell title" style="font-family: Arial, Helvetica, sans-serif; vertical-align: top; padding: 0 2px; font-weight: bold; font-size: 12px; border: 1px solid #c09329; text-align: center;" valign="top" align="center">Цвет</th>
									<th class="cell-product title" style="font-family: Arial, Helvetica, sans-serif; vertical-align: top; padding: 0 2px; font-weight: bold; font-size: 12px; border: 1px solid #c09329; text-align: center;" valign="top" align="center">Форма</th>
									<th class="cell-product title" style="font-family: Arial, Helvetica, sans-serif; vertical-align: top; padding: 0 2px; font-weight: bold; font-size: 12px; border: 1px solid #c09329; text-align: center;" valign="top" align="center">Цена шт./грн.</th>
									<th class="cell-product title" style="font-family: Arial, Helvetica, sans-serif; vertical-align: top; padding: 0 2px; font-weight: bold; font-size: 12px; border: 1px solid #c09329; text-align: center;" valign="top" align="center">Площадь мм</th>
									<th class="cell-product title" style="font-family: Arial, Helvetica, sans-serif; vertical-align: top; padding: 0 2px; font-weight: bold; font-size: 12px; border: 1px solid #c09329; text-align: center;" valign="top" align="center">Количество шт.</th>
									<th class="cell-product title" style="font-family: Arial, Helvetica, sans-serif; vertical-align: top; padding: 0 2px; font-weight: bold; font-size: 12px; border: 1px solid #c09329; text-align: center;" valign="top" align="center">Сумма грн.</th>
								</tr>'
								.$listProduct.
								'<tr style="font-family: Arial, Helvetica, sans-serif;">
								<td class="cell-product-left bold" colspan="6" style="font-family: Arial, Helvetica, sans-serif; border: 1px solid #c09329; font-weight: bold;">Общая сумма</td>
								<td class="cell-product bold" style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; border: 1px solid #c09329; text-align: center; font-weight: bold;" align="center">'.$_POST['sum_total'].'</td>
							</tr></table></td></tr><tr style="font-family: Arial, Helvetica, sans-serif;"><td style="font-family: Arial, Helvetica, sans-serif; word-wrap: break-word; font-size: 0px; padding: 10px 25px;" align="center"><div style="cursor: auto; color: #099; font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 30px; line-height: 22px; text-align: center;"><p class="text-accompanying" style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; text-align: left; color: #000;">
								С уважением, Podlogkafood.
								</p></div></td></tr></tbody></table></div><!--[if mso | IE]>
				</td></tr></table>
				<![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>
				</td></tr></table>
				<![endif]--></div>
	</body>
	</html>';

$to= 'evgeniy.saschenko@gmail.com';
$subject= 'Заказ Podlogkafood - '.date('d.m.Y'); 
$headers = 'From: Podlogkafood <info@'.$_SERVER['HTTP_HOST'].'>' . "\r\n";
$headers .= 'Content-type: text/html; charset="utf-8"';

if( mail($to, $subject, $message, $headers) ){
	mail($_POST['mail'], $subject, $message, $headers);
	echo json_encode( 'success' );
} else {
	echo json_encode( 'error' ); 
}
?>