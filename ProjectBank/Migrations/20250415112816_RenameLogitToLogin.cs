using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectBank.Migrations
{
    /// <inheritdoc />
    public partial class RenameLogitToLogin : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Logit",
                table: "Users",
                newName: "Login");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Login",
                table: "Users",
                newName: "Logit");
        }
    }
}
