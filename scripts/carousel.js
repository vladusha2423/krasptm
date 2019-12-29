resizeNews();
window.addEventListener('resize', function(){resizeNews()});

function resizeNews() {
    let inner = $('#news .carousel-inner');
    if(window.matchMedia('(max-width: 800px').matches){
        inner.empty();
        inner.append("<div class=\"carousel-item active\">\n" +
            "                <div class=\"news-item-container\">\n" +
            "                <div class=\"news-item-bg\">\n" +
            "                    <div class=\"news-item\">\n" +
            "                        <div class=\"news-photo\">\n" +
            "                            <div class=\"news-date\">\n" +
            "                                <div class=\"news-date-number\">\n" +
            "                                    30\n" +
            "                                </div>\n" +
            "                                <div class=\"news-date-month\">\n" +
            "                                    сент.\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"news-content\">\n" +
            "                            <div class=\"news-content-title\">\n" +
            "                                Новый корпус\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-text\">\n" +
            "                                На предприятии ЗАО \"КрасПТМ\" запущен в эксплуатацию новый корпус. Он предназначен для\n" +
            "                                окраски металлоконструкций. Общяя площадь составляет 4000 кв.м.\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-more\">\n" +
            "                                <div class=\"btn-header-more\">\n" +
            "                                    Подробнее\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "            <div class=\"carousel-item\">\n" +
            "                <div class=\"news-item-container\">\n" +
            "                <div class=\"news-item-bg\">\n" +
            "                    <div class=\"news-item\">\n" +
            "                        <div class=\"news-photo\">\n" +
            "                            <div class=\"news-date\">\n" +
            "                                <div class=\"news-date-number\">\n" +
            "                                    30\n" +
            "                                </div>\n" +
            "                                <div class=\"news-date-month\">\n" +
            "                                    сент.\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"news-content\">\n" +
            "                            <div class=\"news-content-title\">\n" +
            "                                Новый корпус\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-text\">\n" +
            "                                На предприятии ЗАО \"КрасПТМ\" запущен в эксплуатацию новый корпус. Он предназначен для окраски металлоконструкций. Общяя площадь составляет 4000 кв.м.\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-more\">\n" +
            "                                <div class=\"btn-header-more\">\n" +
            "                                    Подробнее\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "            <div class=\"carousel-item\">\n" +
            "                <div class=\"news-item-container\">\n" +
            "                <div class=\"news-item-bg\">\n" +
            "                    <div class=\"news-item\">\n" +
            "                        <div class=\"news-photo\">\n" +
            "                            <div class=\"news-date\">\n" +
            "                                <div class=\"news-date-number\">\n" +
            "                                    30\n" +
            "                                </div>\n" +
            "                                <div class=\"news-date-month\">\n" +
            "                                    сент.\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"news-content\">\n" +
            "                            <div class=\"news-content-title\">\n" +
            "                                Новый корпус\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-text\">\n" +
            "                                На предприятии ЗАО \"КрасПТМ\" запущен в эксплуатацию новый корпус. Он предназначен для окраски металлоконструкций. Общяя площадь составляет 4000 кв.м.\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-more\">\n" +
            "                                <div class=\"btn-header-more\">\n" +
            "                                    Подробнее\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                </div>\n" +
            "            </div>");
    }
    else if (window.matchMedia('(max-width: 1200px').matches) {
        inner.empty();
        inner.append("<div class=\"carousel-item active\">\n" +
            "                <div class=\"news-item-container\">\n" +
            "                <div class=\"news-item-bg\">\n" +
            "                    <div class=\"news-item\">\n" +
            "                        <div class=\"news-photo\">\n" +
            "                            <div class=\"news-date\">\n" +
            "                                <div class=\"news-date-number\">\n" +
            "                                    30\n" +
            "                                </div>\n" +
            "                                <div class=\"news-date-month\">\n" +
            "                                    сент.\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"news-content\">\n" +
            "                            <div class=\"news-content-title\">\n" +
            "                                Новый корпус\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-text\">\n" +
            "                                На предприятии ЗАО \"КрасПТМ\" запущен в эксплуатацию новый корпус. Он предназначен для\n" +
            "                                окраски металлоконструкций. Общяя площадь составляет 4000 кв.м.\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-more\">\n" +
            "                                <div class=\"btn-header-more\">\n" +
            "                                    Подробнее\n" +
            "                                </div>\n" +

            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                <div class=\"news-item-bg\">\n" +
            "                    <div class=\"news-item\">\n" +
            "                        <div class=\"news-photo\">\n" +
            "                            <div class=\"news-date\">\n" +
            "                                <div class=\"news-date-number\">\n" +
            "                                    30\n" +
            "                                </div>\n" +
            "                                <div class=\"news-date-month\">\n" +
            "                                    сент.\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"news-content\">\n" +
            "                            <div class=\"news-content-title\">\n" +
            "                                Новый корпус\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-text\">\n" +
            "                                На предприятии ЗАО \"КрасПТМ\" запущен в эксплуатацию новый корпус. Он предназначен для окраски металлоконструкций. Общяя площадь составляет 4000 кв.м.\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-more\">\n" +
            "                                <div class=\"btn-header-more\">\n" +
            "                                    Подробнее\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "            <div class=\"carousel-item\">\n" +
            "                <div class=\"news-item-container\">\n" +
            "                <div class=\"news-item-bg\">\n" +
            "                    <div class=\"news-item\">\n" +
            "                        <div class=\"news-photo\">\n" +
            "                            <div class=\"news-date\">\n" +
            "                                <div class=\"news-date-number\">\n" +
            "                                    30\n" +
            "                                </div>\n" +
            "                                <div class=\"news-date-month\">\n" +
            "                                    сент.\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"news-content\">\n" +
            "                            <div class=\"news-content-title\">\n" +
            "                                Новый корпус\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-text\">\n" +
            "                                На предприятии ЗАО \"КрасПТМ\" запущен в эксплуатацию новый корпус. Он предназначен для окраски металлоконструкций. Общяя площадь составляет 4000 кв.м.\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-more\">\n" +
            "                                <div class=\"btn-header-more\">\n" +
            "                                    Подробнее\n" +
            "                                </div>\n" +

            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                <div class=\"news-item-bg\">\n" +
            "                    <div class=\"news-item\">\n" +
            "                        <div class=\"news-photo\">\n" +
            "                            <div class=\"news-date\">\n" +
            "                                <div class=\"news-date-number\">\n" +
            "                                    30\n" +
            "                                </div>\n" +
            "                                <div class=\"news-date-month\">\n" +
            "                                    сент.\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"news-content\">\n" +
            "                            <div class=\"news-content-title\">\n" +
            "                                Новый корпус\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-text\">\n" +
            "                                На предприятии ЗАО \"КрасПТМ\" запущен в эксплуатацию новый корпус. Он предназначен для окраски металлоконструкций. Общяя площадь составляет 4000 кв.м.\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-more\">\n" +
            "                                <div class=\"btn-header-more\">\n" +
            "                                    Подробнее\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "            <div class=\"carousel-item\">\n" +
            "                <div class=\"news-item-container\">\n" +
            "                <div class=\"news-item-bg\">\n" +
            "                    <div class=\"news-item\">\n" +
            "                        <div class=\"news-photo\">\n" +
            "                            <div class=\"news-date\">\n" +
            "                                <div class=\"news-date-number\">\n" +
            "                                    30\n" +
            "                                </div>\n" +
            "                                <div class=\"news-date-month\">\n" +
            "                                    сент.\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"news-content\">\n" +
            "                            <div class=\"news-content-title\">\n" +
            "                                Новый корпус\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-text\">\n" +
            "                                На предприятии ЗАО \"КрасПТМ\" запущен в эксплуатацию новый корпус. Он предназначен для окраски металлоконструкций. Общяя площадь составляет 4000 кв.м.\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-more\">\n" +
            "                                <div class=\"btn-header-more\">\n" +
            "                                    Подробнее\n" +
            "                                </div>\n" +

            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                <div class=\"news-item-bg\">\n" +
            "                    <div class=\"news-item\">\n" +
            "                        <div class=\"news-photo\">\n" +
            "                            <div class=\"news-date\">\n" +
            "                                <div class=\"news-date-number\">\n" +
            "                                    30\n" +
            "                                </div>\n" +
            "                                <div class=\"news-date-month\">\n" +
            "                                    сент.\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"news-content\">\n" +
            "                            <div class=\"news-content-title\">\n" +
            "                                Новый корпус\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-text\">\n" +
            "                                На предприятии ЗАО \"КрасПТМ\" запущен в эксплуатацию новый корпус. Он предназначен для окраски металлоконструкций. Общяя площадь составляет 4000 кв.м.\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-more\">\n" +
            "                                <div class=\"btn-header-more\">\n" +
            "                                    Подробнее\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                </div>\n" +
            "            </div>");
    } else {
        inner.empty();
        inner.append("<div class=\"carousel-item active\">\n" +
            "                <div class=\"news-item-container\">\n" +
            "                <div class=\"news-item-bg\">\n" +
            "                    <div class=\"news-item\">\n" +
            "                        <div class=\"news-photo\">\n" +
            "                            <div class=\"news-date\">\n" +
            "                                <div class=\"news-date-number\">\n" +
            "                                    30\n" +
            "                                </div>\n" +
            "                                <div class=\"news-date-month\">\n" +
            "                                    сент.\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"news-content\">\n" +
            "                            <div class=\"news-content-title\">\n" +
            "                                Новый корпус\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-text\">\n" +
            "                                На предприятии ЗАО \"КрасПТМ\" запущен в эксплуатацию новый корпус. Он предназначен для\n" +
            "                                окраски металлоконструкций. Общяя площадь составляет 4000 кв.м.\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-more\">\n" +
            "                                <div class=\"btn-header-more\">\n" +
            "                                    Подробнее\n" +
            "                                </div>\n" +

            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                <div class=\"news-item-bg\">\n" +
            "                    <div class=\"news-item\">\n" +
            "                        <div class=\"news-photo\">\n" +
            "                            <div class=\"news-date\">\n" +
            "                                <div class=\"news-date-number\">\n" +
            "                                    30\n" +
            "                                </div>\n" +
            "                                <div class=\"news-date-month\">\n" +
            "                                    сент.\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"news-content\">\n" +
            "                            <div class=\"news-content-title\">\n" +
            "                                Новый корпус\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-text\">\n" +
            "                                На предприятии ЗАО \"КрасПТМ\" запущен в эксплуатацию новый корпус. Он предназначен для окраски металлоконструкций. Общяя площадь составляет 4000 кв.м.\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-more\">\n" +
            "                                <div class=\"btn-header-more\">\n" +
            "                                    Подробнее\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                <div class=\"news-item-bg\">\n" +
            "                    <div class=\"news-item\">\n" +
            "                        <div class=\"news-photo\">\n" +
            "                            <div class=\"news-date\">\n" +
            "                                <div class=\"news-date-number\">\n" +
            "                                    30\n" +
            "                                </div>\n" +
            "                                <div class=\"news-date-month\">\n" +
            "                                    сент.\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"news-content\">\n" +
            "                            <div class=\"news-content-title\">\n" +
            "                                Новый корпус\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-text\">\n" +
            "                                На предприятии ЗАО \"КрасПТМ\" запущен в эксплуатацию новый корпус. Он предназначен для окраски металлоконструкций. Общяя площадь составляет 4000 кв.м.\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-more\">\n" +
            "                                <div class=\"btn-header-more\">\n" +
            "                                    Подробнее\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "            <div class=\"carousel-item\">\n" +
            "                <div class=\"news-item-container\">\n" +
            "                <div class=\"news-item-bg\">\n" +
            "                    <div class=\"news-item\">\n" +
            "                        <div class=\"news-photo\">\n" +
            "                            <div class=\"news-date\">\n" +
            "                                <div class=\"news-date-number\">\n" +
            "                                    30\n" +
            "                                </div>\n" +
            "                                <div class=\"news-date-month\">\n" +
            "                                    сент.\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"news-content\">\n" +
            "                            <div class=\"news-content-title\">\n" +
            "                                Новый корпус\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-text\">\n" +
            "                                На предприятии ЗАО \"КрасПТМ\" запущен в эксплуатацию новый корпус. Он предназначен для окраски металлоконструкций. Общяя площадь составляет 4000 кв.м.\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-more\">\n" +
            "                                <div class=\"btn-header-more\">\n" +
            "                                    Подробнее\n" +
            "                                </div>\n" +

            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                <div class=\"news-item-bg\">\n" +
            "                    <div class=\"news-item\">\n" +
            "                        <div class=\"news-photo\">\n" +
            "                            <div class=\"news-date\">\n" +
            "                                <div class=\"news-date-number\">\n" +
            "                                    30\n" +
            "                                </div>\n" +
            "                                <div class=\"news-date-month\">\n" +
            "                                    сент.\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"news-content\">\n" +
            "                            <div class=\"news-content-title\">\n" +
            "                                Новый корпус\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-text\">\n" +
            "                                На предприятии ЗАО \"КрасПТМ\" запущен в эксплуатацию новый корпус. Он предназначен для окраски металлоконструкций. Общяя площадь составляет 4000 кв.м.\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-more\">\n" +
            "                                <div class=\"btn-header-more\">\n" +
            "                                    Подробнее\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                <div class=\"news-item-bg\">\n" +
            "                    <div class=\"news-item\">\n" +
            "                        <div class=\"news-photo\">\n" +
            "                            <div class=\"news-date\">\n" +
            "                                <div class=\"news-date-number\">\n" +
            "                                    30\n" +
            "                                </div>\n" +
            "                                <div class=\"news-date-month\">\n" +
            "                                    сент.\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"news-content\">\n" +
            "                            <div class=\"news-content-title\">\n" +
            "                                Новый корпус\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-text\">\n" +
            "                                На предприятии ЗАО \"КрасПТМ\" запущен в эксплуатацию новый корпус. Он предназначен для окраски металлоконструкций. Общяя площадь составляет 4000 кв.м.\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-more\">\n" +
            "                                <div class=\"btn-header-more\">\n" +
            "                                    Подробнее\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "            <div class=\"carousel-item\">\n" +
            "                <div class=\"news-item-container\">\n" +
            "                <div class=\"news-item-bg\">\n" +
            "                    <div class=\"news-item\">\n" +
            "                        <div class=\"news-photo\">\n" +
            "                            <div class=\"news-date\">\n" +
            "                                <div class=\"news-date-number\">\n" +
            "                                    30\n" +
            "                                </div>\n" +
            "                                <div class=\"news-date-month\">\n" +
            "                                    сент.\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"news-content\">\n" +
            "                            <div class=\"news-content-title\">\n" +
            "                                Новый корпус\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-text\">\n" +
            "                                На предприятии ЗАО \"КрасПТМ\" запущен в эксплуатацию новый корпус. Он предназначен для окраски металлоконструкций. Общяя площадь составляет 4000 кв.м.\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-more\">\n" +
            "                                <div class=\"btn-header-more\">\n" +
            "                                    Подробнее\n" +
            "                                </div>\n" +

            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                <div class=\"news-item-bg\">\n" +
            "                    <div class=\"news-item\">\n" +
            "                        <div class=\"news-photo\">\n" +
            "                            <div class=\"news-date\">\n" +
            "                                <div class=\"news-date-number\">\n" +
            "                                    30\n" +
            "                                </div>\n" +
            "                                <div class=\"news-date-month\">\n" +
            "                                    сент.\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"news-content\">\n" +
            "                            <div class=\"news-content-title\">\n" +
            "                                Новый корпус\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-text\">\n" +
            "                                На предприятии ЗАО \"КрасПТМ\" запущен в эксплуатацию новый корпус. Он предназначен для окраски металлоконструкций. Общяя площадь составляет 4000 кв.м.\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-more\">\n" +
            "                                <div class=\"btn-header-more\">\n" +
            "                                    Подробнее\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                <div class=\"news-item-bg\">\n" +
            "                    <div class=\"news-item\">\n" +
            "                        <div class=\"news-photo\">\n" +
            "                            <div class=\"news-date\">\n" +
            "                                <div class=\"news-date-number\">\n" +
            "                                    30\n" +
            "                                </div>\n" +
            "                                <div class=\"news-date-month\">\n" +
            "                                    сент.\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"news-content\">\n" +
            "                            <div class=\"news-content-title\">\n" +
            "                                Новый корпус\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-text\">\n" +
            "                                На предприятии ЗАО \"КрасПТМ\" запущен в эксплуатацию новый корпус. Он предназначен для окраски металлоконструкций. Общяя площадь составляет 4000 кв.м.\n" +
            "                            </div>\n" +
            "                            <div class=\"news-content-more\">\n" +
            "                                <div class=\"btn-header-more\">\n" +
            "                                    Подробнее\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                </div>\n" +
            "            </div>");
    }
}