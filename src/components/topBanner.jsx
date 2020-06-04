import React, {useCallback, useState} from "react";
import {ActionList, AppProvider, Frame, Icon, Select, TopBar, VisuallyHidden} from "@shopify/polaris";
import Card from "react-bootstrap/Card";
import {ArrowLeftMinor, QuestionMarkMajorTwotone} from "@shopify/polaris-icons";
import {useTranslation} from "react-i18next";

function TopBanner() {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const toggleIsUserMenuOpen = useCallback(
        () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
        [],
    );

    const toggleIsSecondaryMenuOpen = useCallback(
        () => setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen),
        [],
    );

    const handleSearchResultsDismiss = useCallback(() => {
        setIsSearchActive(false);
        setSearchValue('');
    }, []);

    const handleSearchChange = useCallback((value) => {
        setSearchValue(value);
        setIsSearchActive(value.length > 0);
    }, []);

    const handleNavigationToggle = useCallback(() => {
        console.log('toggle navigation visibility');
    }, []);

    const theme = {
        colors: {
            topBar: {
                background: '#357997',
            },
        },
        logo: {
            width: 124,
            topBarSource:
                'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
            url: 'http://jadedpixel.com',
            accessibilityLabel: 'Jaded Pixel',
        },
    };

    const searchResultsMarkup = (
        <Card>
            <ActionList
                items={[
                    {content: 'Shopify help center'},
                    {content: 'Community forums'},
                ]}
            />
        </Card>
    );

    const searchFieldMarkup = (
        <TopBar.SearchField
            onChange={handleSearchChange}
            value={searchValue}
            placeholder="Search"
            showFocusBorder
        />
    );

    const secondaryMenuMarkup = (
        <TopBar.Menu
            activatorContent={
                <span>
          <Icon source={QuestionMarkMajorTwotone} />
          <VisuallyHidden>Secondary menu</VisuallyHidden>
        </span>
            }
            open={isSecondaryMenuOpen}
            onOpen={toggleIsSecondaryMenuOpen}
            onClose={toggleIsSecondaryMenuOpen}
            actions={[
                {
                    items: [{content: 'Community forums'}],
                },
            ]}
        />
    );

    const {i18n} = useTranslation();

    const handleLangChange = event => {
        let newlang = event;
        console.log("selected language is ", newlang);
        i18n.changeLanguage(newlang);
    };

    const options = [
        {label: "Tiếng Việt", value: "vn"},
        {label: "English", value: "en"},
    ];

    const languagePicker =
        <Select
            options={options}
            onChange={handleLangChange}
            value={i18n.language || "en"}
        />;

    const topBarMarkup = (
        <TopBar
            showNavigationToggle
            userMenu={languagePicker}
            secondaryMenu={secondaryMenuMarkup}
            searchResultsVisible={isSearchActive}
            searchField={searchFieldMarkup}
            searchResults={searchResultsMarkup}
            onSearchResultsDismiss={handleSearchResultsDismiss}
            onNavigationToggle={handleNavigationToggle}
        />
    );

    return (
        <div style={{height: '250px'}}>
            <AppProvider
                theme={theme}
                i18n={{
                    Polaris: {
                        Avatar: {
                            label: 'Avatar',
                            labelWithInitials: 'Avatar with initials {initials}',
                        },
                        Frame: {skipToContent: 'Skip to content'},
                        TopBar: {
                            toggleMenuLabel: 'Toggle menu',
                            SearchField: {
                                clearButtonLabel: 'Clear',
                                search: 'Search',
                            },
                        },
                    },
                }}
            >
                <Frame topBar={topBarMarkup} />
            </AppProvider>
        </div>
    );
}
export default TopBanner;