import { Icon } from '@progress/kendo-react-common';
import { AppBar, AppBarSection, AppBarSpacer } from '@progress/kendo-react-layout';

export function MainMenu() {
  return (
    <AppBar>
      <AppBarSection>
        jobfairy
      </AppBarSection>

      <AppBarSpacer />

      <AppBarSection>
        <Icon name="logout" />
      </AppBarSection>
    </AppBar>
  );
}
