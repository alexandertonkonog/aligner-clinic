<?php 
    require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
    define('TEMPLATE_PATH', '/local/templates/align');
    use Bitrix\Main\Page\Asset;
    
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <? $APPLICATION->ShowHead();  ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <? Asset::getInstance()->addCss(TEMPLATE_PATH . "/assets/js/slick/slick.css"); ?>
    <? Asset::getInstance()->addCss(TEMPLATE_PATH . "/assets/js/slick/slick-theme.css"); ?>
    <? Asset::getInstance()->addCss(TEMPLATE_PATH . "/assets/css/index.css"); ?>
    <title><?$APPLICATION->ShowTitle()?></title>
</head>
<body class="body_bg">
    <div id="panel">
        <? $APPLICATION->ShowPanel(); ?> 
    </div>
    <header class="header header_page">
        <nav class="nav header__nav block">
            <a href="/" class="header__logo-container">
                <img src="<?=TEMPLATE_PATH . "/assets/images/logo.svg" ?>" alt="Align Clinic" title="Align Clinic" class="logo header__logo">
            </a>
            <?$APPLICATION->IncludeComponent(
                "bitrix:menu", 
                "horizontal_multilevel", 
                array(
                    "ALLOW_MULTI_SELECT" => "N",
                    "CHILD_MENU_TYPE" => "top",
                    "COMPOSITE_FRAME_MODE" => "A",
                    "COMPOSITE_FRAME_TYPE" => "AUTO",
                    "DELAY" => "N",
                    "MAX_LEVEL" => "1",
                    "MENU_CACHE_GET_VARS" => array(
                    ),
                    "MENU_CACHE_TIME" => "3600",
                    "MENU_CACHE_TYPE" => "A",
                    "MENU_CACHE_USE_GROUPS" => "Y",
                    "ROOT_MENU_TYPE" => "left",
                    "USE_EXT" => "N",
                    "COMPONENT_TEMPLATE" => "horizontal_multilevel"
                ),
                false
            );?>
            <ul class="nav__menu header__menu">
                <li class="nav__link-wrapper nav__link-wrapper_only-full" data-id="company">
                    <p class="nav__link nav__link_have-child">
                        о компании
                        <svg class="nav__link-icon" width="12" height="7" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L4.5 4L8 1" stroke="white"/>
                            <path d="M1 1L4.5 4L8 1" stroke="#54575A" stroke-opacity="0.8"/>
                        </svg> 
                    </p>
                    <ul class="nav__link-dropdown">
                        <li class="dropdown__link-wrapper">
                            <a href="" class="dropdown__link">История</a>
                        </li>
                        <li class="dropdown__link-wrapper">
                            <a href="" class="dropdown__link">История</a>
                        </li>
                        <li class="dropdown__link-wrapper">
                            <a href="" class="dropdown__link">История</a>
                        </li>
                    </ul>
                </li>
                <li class="nav__link-wrapper nav__link-wrapper_only-full"><a href="" class="nav__link">услуги</a></li>
                <li class="nav__link-wrapper nav__link-wrapper_active"><a href="/price.html" class="nav__link">Стоимость</a></li>
                <li class="nav__link-wrapper">
                    <a href="" class="nav__link">
                        <img src="images/fire.svg" class="nav__link-icon" alt="Акции"> Акции
                    </a>
                </li>
                <li class="nav__link-wrapper">
                    <a href="" class="nav__link">
                        <img src="images/bear.svg" class="nav__link-icon" alt="invisalign kids">invisalign kids
                    </a>
                </li>
                <li class="nav__link-wrapper nav__link-wrapper_only-full"><a href="" class="nav__link">Отзывы</a></li>
                <li class="nav__link-wrapper"><a href="" class="nav__link">До-После</a></li>
                <li class="nav__link-wrapper"><a href="" class="nav__link">филиалы</a></li>
            </ul>
            <!-- <button class="btn header__search">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1266 12.0128L16.5 15.3855L15.3855 16.5L12.0128 13.1266C10.7579 14.1325 9.19706 14.6797 7.58871 14.6774C3.67574 14.6774 0.5 11.5017 0.5 7.58871C0.5 3.67574 3.67574 0.5 7.58871 0.5C11.5017 0.5 14.6774 3.67574 14.6774 7.58871C14.6797 9.19706 14.1325 10.7579 13.1266 12.0128ZM11.5466 11.4284C12.5462 10.4005 13.1044 9.02254 13.1021 7.58871C13.1021 4.54214 10.6345 2.07527 7.58871 2.07527C4.54214 2.07527 2.07527 4.54214 2.07527 7.58871C2.07527 10.6345 4.54214 13.1021 7.58871 13.1021C9.02254 13.1044 10.4005 12.5462 11.4284 11.5466L11.5466 11.4284Z" fill="#333333"/>
                </svg>
            </button> -->
            <a href="tel:89180869337" class="btn nav__phone header__mobile-btn">
                <svg class="nav__link-btn-img" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9999 15.9201V18.9201C21.0011 19.1986 20.944 19.4743 20.8324 19.7294C20.7209 19.9846 20.5572 20.2137 20.352 20.402C20.1468 20.5902 19.9045 20.7336 19.6407 20.8228C19.3769 20.912 19.0973 20.9452 18.8199 20.9201C15.7428 20.5857 12.7869 19.5342 10.1899 17.8501C7.77376 16.3148 5.72527 14.2663 4.18993 11.8501C2.49991 9.2413 1.44818 6.27109 1.11993 3.1801C1.09494 2.90356 1.12781 2.62486 1.21643 2.36172C1.30506 2.09859 1.4475 1.85679 1.6347 1.65172C1.82189 1.44665 2.04974 1.28281 2.30372 1.17062C2.55771 1.05843 2.83227 1.00036 3.10993 1.0001H6.10993C6.59524 0.995321 7.06572 1.16718 7.43369 1.48363C7.80166 1.80008 8.04201 2.23954 8.10993 2.7201C8.23656 3.68016 8.47138 4.62282 8.80993 5.5301C8.94448 5.88802 8.9736 6.27701 8.89384 6.65098C8.81408 7.02494 8.6288 7.36821 8.35993 7.6401L7.08993 8.9101C8.51349 11.4136 10.5864 13.4865 13.0899 14.9101L14.3599 13.6401C14.6318 13.3712 14.9751 13.1859 15.3491 13.1062C15.723 13.0264 16.112 13.0556 16.4699 13.1901C17.3772 13.5286 18.3199 13.7635 19.2799 13.8901C19.7657 13.9586 20.2093 14.2033 20.5265 14.5776C20.8436 14.9519 21.0121 15.4297 20.9999 15.9201Z" stroke="#009EE0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
            <button class="btn nav__toggler header__mobile-btn">
                <img src="images/nav-toggle.svg" alt="menu toggler" class="nav__link_have-child nav__link-btn-img" id="nav__link-toggler" />
                <ul class="nav__link-dropdown">
                    <li class="dropdown__link-wrapper nav__link-wrapper_only-middle">
                        <p class="dropdown__link nav__link_have-child">
                            о компании
                            <svg class="nav__link-icon" width="12" height="7" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L4.5 4L8 1" stroke="white"/>
                                <path d="M1 1L4.5 4L8 1" stroke="#54575A" stroke-opacity="0.8"/>
                            </svg> 
                        </p>
                        <ul class="nav__link-dropdown">
                            <li class="dropdown__link-wrapper nav__link-wrapper_only-middle">
                                <a href="" class="dropdown__link">История</a>
                            </li>
                            <li class="dropdown__link-wrapper nav__link-wrapper_only-middle">
                                <a href="" class="dropdown__link">История</a>
                            </li>
                            <li class="dropdown__link-wrapper nav__link-wrapper_only-middle">
                                <a href="" class="dropdown__link">История</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown__link-wrapper nav__link-wrapper_only-middle">
                        <a href="" class="dropdown__link">услуги</a>
                    </li>
                    <li class="dropdown__link-wrapper">
                        <a href="" class="dropdown__link">Стоимость</a>
                    </li>
                    <li class="dropdown__link-wrapper">
                        <a href="" class="dropdown__link"><img src="images/fire.svg" class="nav__link-icon" alt="Акции"> Акции</a>
                    </li>
                    <li class="dropdown__link-wrapper">
                        <a href="" class="dropdown__link"><img src="images/bear.svg" class="nav__link-icon" alt="invisalign kids">invisalign kids</a>
                    </li>
                    <li class="dropdown__link-wrapper nav__link-wrapper_only-middle">
                        <a href="" class="dropdown__link">Отзывы</a>
                    </li>
                    <li class="dropdown__link-wrapper">
                        <a href="" class="dropdown__link">До-После</a>
                    </li>
                    <li class="dropdown__link-wrapper">
                        <a href="" class="dropdown__link">филиалы</a>
                    </li>
                </ul>
            </button>
            <div class="header__right">
                <div class="city">
                    <div class="city__title">
                        <svg class="city__icon" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.6601 14L6.74001 8.48315H0.5L12.5 2L8.6601 14Z" stroke="#009EE0"/>
                        </svg>
                        Краснодар
                        <svg class="city__title-icon" width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L4.5 4L8 1" stroke="white"/>
                            <path d="M1 1L4.5 4L8 1" stroke="#54575A" stroke-opacity="0.8"/>
                        </svg> 
                    </div>
                </div>
                <button class="btn btn_blue modal-init_btn">Записаться</button>
            </div>
        </nav>
    </header>
    <div class="title-area block ">
        <h1 class="title-second mb-small">Филиалы</h1>
        <p class="breadcrumbs">
            <span class="breadcrumbs__item">Главная</span> / 
            <span class="breadcrumbs__item breadcrumbs__item_active">Филиалы</span> 
        </p>
    </div>