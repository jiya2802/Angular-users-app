import { Component, ViewChild, ViewContainerRef, ComponentRef, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserDetailsComponent } from '../../components/user-details/user-details.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnDestroy {
  users: any[] = [];
  loading = true;
  error = '';
  selectedUserId: number | null = null;

  @ViewChild('modalContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
  modalRef!: ComponentRef<UserDetailsComponent>;

  // keeping track of currently opened user id (if any)
  openedUserId: number | null = null;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Loading users first
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;

        // If URL already has /user/:id when users finish loading, opening its modal
        const idParam = this.route.snapshot.paramMap.get('id');
        if (idParam) {
          const id = Number(idParam);
          const found = this.users.find(u => u.id === id);
          if (found) {
            this.openDetails(found, false);
          }
        }
      },
      error: () => {
        this.error = "Failed to load users";
        this.loading = false;
      }
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id) {
        const userId = Number(id);
        // If user list is loaded, opening the modal for that user
        const user = this.users.find(u => u.id === userId);
        if (user) {
          this.openDetails(user, false);
        }
      } else {
        // route no longer has id -> close modal if open
        this.container?.clear();
        this.openedUserId = null;
      }
    });
  }

  /**
   * Open details modal for a user.
   * @param user the user object
   * @param pushUrl whether to push /user/:id into the browser URL (true when user clicked)
   */
  openDetails(user: any, pushUrl = true) {
    this.selectedUserId = user.id;

    // If requested, update URL to /user/:id so route exists in history
    if (pushUrl) {
      this.router.navigate(['/user', user.id]);
    }

    // clearing previous modal (if any)
    this.container.clear();

    // create dynamic component
    this.modalRef = this.container.createComponent(UserDetailsComponent);
    this.modalRef.instance.user = user;

    // remembering opened id
    this.openedUserId = user.id;

    // parent provides a close function so child can call it
   this.modalRef.instance.close = () => {
  this.container.clear();
  this.openedUserId = null;
  this.selectedUserId = null;


  // ALWAYS go back to /users
  this.router.navigate(['/users']);
};

  }

  ngOnDestroy(): void {
    // cleanup to avoid leaks
    if (this.modalRef) {
      this.modalRef.destroy();
    }
  }
}
